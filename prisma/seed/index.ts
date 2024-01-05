import { runCategorySeed } from "./category";
import { runProductSeed } from "./product";


(async function seed() {
    console.log('seeding....')
    runCategorySeed().then(() => {
        runProductSeed()
    });

    console.log('seeding complete!!!')
})();