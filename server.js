const build_place = process.env.BUILD_ON;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getData() {
	return `Build on ${build_place}`;
}

function getDate() {
  return new Date();
}

async function main() {
  while(true) {
    try  {
		console.log(getData());
		console.log(getDate());
		console.log(`Build on ${build_place}`);
    }
    catch(e) {
      console.log(e);
    }
    finally {
      await sleep(5000);
    }
  }
}

main();
