angular-input-ssn
=====

Add this attribute to your input element to make it display as a social security number.

It's a simple angularjs directive that changes the way an input looks without changing the value that angular sees for it.  It restricts the user to type only numeric characters and adds hyphens to the number.

Because it's such a small amount of code, it should be able to read and understand so you can even tweak it for your needs.  In fact, I encourage it!

Available on Bower
-----

`bower install angular-input-ssn`

How To
-----
Simply include the input-ssn module

```javascript
var app = angular.module('app', [ 'input-ssn' ]);
```

Then use the usd attribute on input fields in your html

```html
<input type="text" ssn ng-model="ssn" />
```

Note that the input type must be `text` in order for angular to allow it to watch where your cursor is and not reset where your typing after each character.  `ng-model` is required.

That's it!

Check out the github pages example here: http://deltreey.github.io/angular-input-ssn/
