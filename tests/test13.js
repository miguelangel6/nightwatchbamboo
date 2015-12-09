
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
	//       	.useXpath() // every selector now must be xpath
	//	.click("id('settingsnav')/x:ul/x:li/x:ul/x:li/x:p/x:a")
	//	.getLocation('a[href="http://plataforma.nivel7.net/browserstack/grade/report/index.php?id=2"]')
	//	.click('a[href="/grade/report/index.php?id=2"]')
	// 	.click("//id('inst4')/x:div[2]/x:ul/x:li/x:ul/x:li[1]/x:p/x:a/x:span")
	.verify.attributeContains('#settingsnav p.tree_item.leaf a', 'href', '/grade/report/index.php?id=')
	.verify.attributeEquals('#settingsnav p.tree_item.leaf a', 'href', 'http://plataforma.nivel7.net/browserstack/grade/report/index.php?id=2')
	.assert.containsText("#settingsnav p.tree_item.leaf a", "Gra")
	.assert.cssClassPresent("#settingsnav", "box")
	.assert.cssClassNotPresent("#settingsnav ul", "box")
	.assert.cssProperty("#settingsnav p.tree_item.leaf a", "font-size", "14px")
	.assert.elementPresent("#page-course-view-weeks")
	.assert.elementNotPresent("#page-my-index")
	.verify.title("Course: Plantilla de prueba No.3")
	.assert.urlContains('browserstack')
	.assert.urlEquals('http://plataforma.nivel7.net/browserstack/course/view.php?id=2')
	.setValue('input[name=search]','forum')
	.saveScreenshot('screenshots/BrowserStackCursoBusqueda.png')
	.verify.value("input[name=search]", "forum")
	.clearValue('input[name=search]')
	.saveScreenshot('screenshots/BrowserStackCursoBusquedaEmpty.png')
	.click("#settingsnav p.tree_item.leaf a")
	.waitForElementVisible('body',1000)
	.saveScreenshot('screenshots/BrowserStackCursoGrades.png')
	.click('a[title="Plantilla de prueba No.3"]')
	.getAttribute("#searchform_button", "type", function(result) {
		this.verify.equal(typeof result, "object");
		this.verify.equal(result.status, 0);
		this.verify.equal(result.value, "submit");
	})
	.waitForElementVisible('body',1000)
	.getElementSize("#section-0 .content .no-overflow img", function(result) {
		this.verify.equal(typeof result, "object");
		this.verify.equal(result.status, 0);
		this.verify.equal(result.value.width, 900);
		this.verify.equal(result.value.height, 250);
	})
	.moveToElement('#inst31', 10, 10)
	.pause(2000)
	.waitForElementVisible('body',1000)
	.end();
    }
}