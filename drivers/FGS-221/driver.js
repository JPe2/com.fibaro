'use strict';
const Homey = require('homey');
class FibaroDoubleSwitchDevice extends Homey.Driver {
    onInit() {
        super.onInit();
        this.input1FlowTrigger = new Homey.FlowCardTriggerDevice('FGS-221_S1').register()
            .registerRunListener((args, state) => {
                return args.device.inputFlowListener(args, state);
            });
        this.input2FlowTrigger = new Homey.FlowCardTriggerDevice('FGS-221_S2').register()
            .registerRunListener((args, state) => {
                return args.device.inputFlowListener(args, state);
            });
    }
}
module.exports = FibaroDoubleSwitchDevice;
