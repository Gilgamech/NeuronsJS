//Author: Stephen Gillie
//Created: 8/14/2022
//Updated: 8/14/2022
//Notes: Inspired by this neural network in a spreadsheet: https://medium.com/@MoralRobots/neurons-in-spreadsheets-e917c5c77a22
//Synapse has 1 input and 1 Weight, outputs multiplied sum. Neuron adds output of many synapses, has 1 weight, if sum is greater than weight, outputs sum. In each layer, 1 synapse in each neuron foreach input bit, and 1 neuron foreach output bit.
//So we should take inputs as an array and for loop over them, creating synapses on each loop.

//Weight change
//if the synapse's number moved the opposite direction, change sign. 
//Try to guess how much, based on last input? How much history to save for this? 


var Threshold = 0
var Goal = 1
var neuronNumber = 0;
var Threshold = 0;
var neurons = [];
var Output = 0
var iterations = 0;

function runNeurons(sensitivity=0.01) {
	createNeuron(3)
	var diff = Output - Goal;
	while (diff < sensitivity) {		
		Output = neuron(2,neuron(0,1,1),neuron(1,1,1))
		console.log("Output: "+Output+" iterations: "+iterations)
	}
}

function createNeuron(num) {
	for (var i = 0; i < num; i++) {
		neurons[neurons.length] = {
			"neuronId": neurons.length,
			"activation": 0.001,
			"rate": 0.001,
			"weight": 0.264
		}
	}
}

function neuron(neuronId,input1,input2) {
//This neuron has 2 synapses built in and uses the same weight foreach.

	iterations++;
//synapse:
	//determine rate
	neurons[neuronId].rate = Rate(Goal,Output,neurons[neuronId].weight)
	//create new weight
	neurons[neuronId].weight = NewWeight(Output,Goal,neurons[neuronId].weight,neurons[neuronId].rate)
	
		//verify weight polarity
		//get weighted output
	var weightedOutput1 = input1*neurons[neuronId].weight
	var weightedOutput2 = input2*neurons[neuronId].weight 
	
//neuron:
	//accumulate synapse potential
	//if greater than threshold, activate.
	console.log("neuron: "+neuronId+" weight: "+neurons[neuronId].weight)
	return Activation((weightedOutput1+weightedOutput2),Threshold)
}

function Rate(Goal,Output,Weight) {
	return getRoundedNumber(Math.abs(Goal - Output)*Weight,3)
};//end function

//training is setting weights with training inputs
//use is setting inputs with static weights

function NewWeight(Output,Goal,Weight,Rate) {
	if (Output < Goal) {
		return Weight + Rate
	} else if (Output > Goal) {
		return Weight - Rate
	} else {
		return 0;
	}
};//end function

function Activation(Potential,Threshold) {
	if (Potential > Threshold) {
		return Potential
	} else {
		return 0
	}
};//end function

