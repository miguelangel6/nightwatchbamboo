module.exports ={
    'logeo Moodle':function(browser){
	browser
	.url('http://plataforma.nivel7.net/browserstack/login/index.php')
	.waitForElementVisible('body',1000)
	.setValue('input[id=username]','browserstack')
	.setValue('input[id=password]','Browser6*')
	.submitForm('form#login')
	.waitForElementVisible('body',1000)
	.click('a[title="Plantilla de prueba No.3"]')
	.waitForElementVisible('body',1000)
	.saveScreenshot('screenshots/BrowserStackCurso.png')
	//	.getLocation('a[href="http://plataforma.nivel7.net/browserstack/grade/report/index.php?id=2"]')
	//	.click('a[href="/grade/report/index.php?id=2"]')
	.getLocation('a[href="http://plataforma.nivel7.net/browserstack/grade/report/index.php?id=2"]', function(result) {
		this.assert.equal(typeof result, "object");
		this.assert.equal(result.status, 0);
		this.assert.equal(result.value.x, 200);
		this.assert.equal(result.value.y, 200);
	})
	.end();
    }
}