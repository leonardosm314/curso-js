new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
    .then(() => {

        console.log('Do this');
        throw new Error('Something failed');
    })
    .catch(() => {
        console.error('Do that');
    })
    .then(() => {
        console.log('Do this, no matter what happened before');
    });

//      async 
async function foo() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch (error) {
        failureCallback(error);
    }
}   