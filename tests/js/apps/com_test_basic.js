﻿define('com_test_basic', ['F2'], function(F2) {

	function AppClass(instanceId, appConfig, data, root) {
		this.instanceId = instanceId;
		this.appConfig = appConfig;
		this.data = data;
		this.root = root;

		// Store some properties on the window
		window.test.com_test_basic = {
			instanceId: instanceId,
			root: root
		};

		// Listen to an event
		F2.Events.on('com_test_basic', function() {
			window.test.com_test_basic.event = true;
		}, this);
	}

	AppClass.prototype.dispose = function() {
		delete window.test.com_test_basic;
	};

	return AppClass;

});