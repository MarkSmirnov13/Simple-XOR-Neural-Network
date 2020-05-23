const { Layer, Network } = window.synaptic;

let inputLayer = new Layer(2);
let hiddenLayer = new Layer(3);
let outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

let myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

function trainNetwork() {
    let learningRate = .3;
    let inputOne = document.querySelector('.input-1');
    let inputTwo = document.querySelector('.input-2');
    let inputThree = document.querySelector('.input-3');
    let inputFour = document.querySelector('.input-4');

    for (let i = 0; i < 20000; i++) {
        myNetwork.activate([0, 0]);
        myNetwork.propagate(learningRate, [0]);

        myNetwork.activate([0, 1]);
        myNetwork.propagate(learningRate, [1]);

        myNetwork.activate([1, 0]);
        myNetwork.propagate(learningRate, [1]);

        myNetwork.activate([1, 1]);
        myNetwork.propagate(learningRate, [0]);
    }

    inputOne.innerHTML = 'Output Value: ' + myNetwork.activate([0,0]);
    inputTwo.innerHTML = 'Output Value: ' + myNetwork.activate([0,1]);
    inputThree.innerHTML = 'Output Value: ' + myNetwork.activate([1,0]);
    inputFour.innerHTML = 'Output Value: ' + myNetwork.activate([1,1]);
}
