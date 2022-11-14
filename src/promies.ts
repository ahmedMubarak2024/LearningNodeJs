const step1 = (): Promise<number> => {
  return new Promise<number>((resolve, regect) => {
    setTimeout(() => {
      // console.log("Step "+ 1)
      resolve(1);
    }, 1000);
  });
};

const step2 = (step: number): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      // console.log(++step)
      resolve(++step);
    }, 1000);
  });
};

const step3 = (step: number): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      // console.log(++step)

      resolve(++step);
    }, 1000);
  });
};
const asyn = async () => {
  let i1 = await step1();
  let i2 = await step2(i1);
  let i3 = await step3(i2);
  console.log('done');
};
step1()
  .then((result) => {
    return step2(result);
  })
  .then((result) => {
    return step3(result);
  })
  .finally(() => {
    console.log('done');
    asyn();
  })
  .catch(() => {
    console.log('error');
  });

export { step1, step2, step3 };
