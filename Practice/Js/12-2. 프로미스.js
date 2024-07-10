const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

promise
  .then((data) => {
    console.log(data); // 1초 후 Data received 출력
  })
  .catch((error) => {
    console.log(error);
  });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("첫번째 프로미스");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("두번째 프로미스");
  }, 2000);
});

promise1
  .then((data) => {
    console.log(data); // 1초 후 첫번째 프로미스 출력
    return promise2;
  })
  .then((data) => {
    console.log(data); // 2초 후 두번재 프로미스 출력
  })
  .catch((error) => {
    console.log(error);
  });
