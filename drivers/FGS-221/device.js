'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class FibaroDoubleSwitchDevice extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('onoff', 'SWITCH_BINARY');
		this._input1FlowTrigger = this.getDriver().input1FlowTrigger;
		this._input2FlowTrigger = this.getDriver().input2FlowTrigger;
	}

}

module.exports = FibaroDoubleSwitchDevice;
