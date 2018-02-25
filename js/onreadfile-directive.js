/* jshint undef: true, unused: true, esversion: 6, asi: true */

	class OnReadFile {
	  constructor($parse) {
		this.restrict = 'A'
		this.parse = $parse
	  }

	  link(scope, element, attrs) {
		let fn = this.parse(attrs.onReadFile)

		element.on('change', function(changeEvent) {
		  let files = changeEvent.target.files
		  let r = new FileReader()

		  r.onload = function(e) {
			let contents = e.target.result
			scope.fileContent = contents
			fn(scope)
			scope.$apply()
		  }

		  r.readAsText(files[0])
		})
	  }

	  static directiveFactory($parse) {
		OnReadFile.instance = new OnReadFile($parse)
		return OnReadFile.instance
	  }
	}

	OnReadFile.directiveFactory.$inject = ['$parse']