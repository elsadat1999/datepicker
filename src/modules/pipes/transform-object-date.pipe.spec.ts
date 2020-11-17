
import { CoreService } from '../services/core.service';
import { TransformObjectDatePipe } from './transform-object-date.pipe';


describe('TransformObjectDatePipe', () => {
  let pipe: any = {};
  beforeEach(() => {
    pipe = new TransformObjectDatePipe(new CoreService());
  })
  it('Must be transform array Of  to array', () => {

    let trans = pipe.transform(Array(3));
    let output = [
      {
        date: '11/1/2020',
        day: 1,
        month: 11,
        year: 2020
      },
      {
        date: '11/2/2020',
        day: 2,
        month: 11,
        year: 2020
      },
      {
        date: '11/3/2020',
        day: 3,
        month: 11,
        year: 2020
      },
    ]
    expect(trans).toEqual(output);
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


});
