// ne pas toucher
const asyncJob = (n) => Math.random() > 0.3 ? Promise.resolve(n + 1) : Promise.reject(Error('boom'));
async function processAsyncJobs(){
    try{
        let i = await asyncJob(0);
        console.log(i);
        i = await asyncJob(i);
        console.log(i);
        const [x, y, z] = await Promise.all([asyncJob(i), asyncJob(i), asyncJob(i)]);
        console.log("x y z ",x,y,z);
        const total = await asyncJob(x + y + z);
        console.log("total ",total);
    }catch(err){
        console.error(`gestion erreur globale: ${err.message}`);
    }
}
processAsyncJobs().then().catch();
