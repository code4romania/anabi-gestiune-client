import { FormControl } from '@angular/forms';
import { CountiesService, County } from '@app/core';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export const CountyCodeExistsValidator =
    (countiesService: CountiesService, interval: number = 500) => {
        return (input: FormControl) => {
            return timer(interval).pipe(
                switchMap(() => countiesService.list$()),
                map((counties: County[]) => counties.some(c => c.abbreviation === input.value)),
                map(isPresent => isPresent ? null : { invalid: true }))
        };
    }
