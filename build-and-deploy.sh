#!/bin/bash -e

VERSION=$1
PRODUCTION_BUILD=$2

# FTP connection details
# FTP password should be stored in ~/.netrc
FTP_HOST=waws-prod-am2-127.ftp.azurewebsites.windows.net
FTP_USER=anabiweb-test\\anabiweb

function usage {
	echo "Usage: $0 <version> <production build>"
	echo "    Version can be anything, like 1.0.1, or 1.0.1-RC"
	echo "    Production build can be 0 or 1"
	exit 1
}

function clean {
    rm -rf dist
    rm -rf node_modules
}

function compile {
    npm install
    
    if [ "$PRODUCTION_BUILD" -eq 1 ]; then
		ng build -prod
    else
		ng build
    fi

    {
        echo "Version: $VERSION" 
        echo -n "Date: " ; date
        echo -n "Git commit: " ; git rev-parse HEAD
        echo -n "Git branch: " ; git rev-parse --abbrev-ref HEAD
    } > dist/version.txt

}

function uploadToFtp {
    cd dist 
    
	# mirror -e removes extra files
	echo "open -u '$FTP_USER' '$FTP_HOST'
	mirror -v -c -R --no-perms . site/wwwroot/
	" | lftp 
	
	echo "Upload done."
}

function checkParameters {
	if [ -z "$VERSION" ]; then
		usage
	fi

	if [ -z "$PRODUCTION_BUILD" ]; then
		usage
	fi
}

# main
checkParameters
echo "Building, version=$VERSION, production build=$PRODUCTION_BUILD"
clean
compile
uploadToFtp
