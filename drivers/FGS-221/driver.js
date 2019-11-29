'use strict';
const Homey = require('homey');
class FibaroDoubleSwitchTwoDevice extends Homey.Driver {
    onInit() {
        super.onInit();
        this.input1FlowTrigger = new Homey.FlowCardTriggerDevice('FGS-223_S1').register()
            .registerRunListener((args, state) => {
                return args.device.inputFlowListener(args, state);
            });
        this.input2FlowTrigger = new Homey.FlowCardTriggerDevice('FGS-223_S2').register()
            .registerRunListener((args, state) => {
                return args.device.inputFlowListener(args, state);
            });
    }
}
module.exports = FibaroDoubleSwitchTwoDevice;
