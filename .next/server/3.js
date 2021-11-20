exports.ids = [3];
exports.modules = {

/***/ "./portfolio/printf.md":
/*!*****************************!*\
  !*** ./portfolio/printf.md ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"---\\ntitle: \\\"printf\\\"\\ndate: \\\"2020-03-18\\\"\\nog:\\n  description: \\\"A printf function for Holberton School.\\\"\\n  image: \\\"/print.jpg\\\"\\nauthor:\\n  twitter: \\\"tabby__katz\\\"\\n  name: \\\"Tabitha O'Melay\\\"\\n---\\n\\n\\n_This was my first pair project and it began just as COVID made the headlines\\nin the US. Building my own printf was a challenge at the time, but looking back\\nit seems simple enough. Isn't that the way it goes?_\\n\\n![](/print.jpg) \\n\\n# The Beast\\n\\n`printf` is a C standard library function that Holberton Students are rarely\\nallowed to use. Eventually, we each write our own, and this project is the\\nresult. We were charged to deal with several format specifiers, with many more\\non the table as optional advanced tasks. In the end, we fared well, and even\\nhad time to get silly (See `%F`).\\n\\n```C\\n#include \\\"holberton.h\\\"\\n/**\\n  * print_F - prints F*CK\\n  * @args: the arguments, but they don't matter\\n  *\\n  * Return: characters printed\\n  *\\n  */\\nint print_F(__attribute__ ((unused))va_list args)\\n{\\n\\tchar *F = \\\"FUCK\\\";\\n\\tint retVal = 0;\\n\\tint i;\\n\\n\\tfor (i = 0; i < 4; i++)\\n\\t{\\n\\t\\tretVal = _putchar(F[i]);\\n\\tif (retVal == -1)\\n\\t\\treturn (retVal);\\n\\t}\\n\\treturn (4);\\n}\\n```\\n\\n<p> <a href=\\\"https://github.com/tabbykatz/printf\\\" target=\\\"_blank\\\">Check it out on Github</a> </p>\\n\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wb3J0Zm9saW8vcHJpbnRmLm1kP2E0YjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxna0NBQWlnQyx1QkFBdUIsbUJBQW1CLFVBQVUsaUJBQWlCLE9BQU8sVUFBVSw4QkFBOEIsMkNBQTJDLEtBQUssZUFBZSxHQUFHLG1IQUFtSCIsImZpbGUiOiIuL3BvcnRmb2xpby9wcmludGYubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBcXFwicHJpbnRmXFxcIlxcbmRhdGU6IFxcXCIyMDIwLTAzLTE4XFxcIlxcbm9nOlxcbiAgZGVzY3JpcHRpb246IFxcXCJBIHByaW50ZiBmdW5jdGlvbiBmb3IgSG9sYmVydG9uIFNjaG9vbC5cXFwiXFxuICBpbWFnZTogXFxcIi9wcmludC5qcGdcXFwiXFxuYXV0aG9yOlxcbiAgdHdpdHRlcjogXFxcInRhYmJ5X19rYXR6XFxcIlxcbiAgbmFtZTogXFxcIlRhYml0aGEgTydNZWxheVxcXCJcXG4tLS1cXG5cXG5cXG5fVGhpcyB3YXMgbXkgZmlyc3QgcGFpciBwcm9qZWN0IGFuZCBpdCBiZWdhbiBqdXN0IGFzIENPVklEIG1hZGUgdGhlIGhlYWRsaW5lc1xcbmluIHRoZSBVUy4gQnVpbGRpbmcgbXkgb3duIHByaW50ZiB3YXMgYSBjaGFsbGVuZ2UgYXQgdGhlIHRpbWUsIGJ1dCBsb29raW5nIGJhY2tcXG5pdCBzZWVtcyBzaW1wbGUgZW5vdWdoLiBJc24ndCB0aGF0IHRoZSB3YXkgaXQgZ29lcz9fXFxuXFxuIVtdKC9wcmludC5qcGcpIFxcblxcbiMgVGhlIEJlYXN0XFxuXFxuYHByaW50ZmAgaXMgYSBDIHN0YW5kYXJkIGxpYnJhcnkgZnVuY3Rpb24gdGhhdCBIb2xiZXJ0b24gU3R1ZGVudHMgYXJlIHJhcmVseVxcbmFsbG93ZWQgdG8gdXNlLiBFdmVudHVhbGx5LCB3ZSBlYWNoIHdyaXRlIG91ciBvd24sIGFuZCB0aGlzIHByb2plY3QgaXMgdGhlXFxucmVzdWx0LiBXZSB3ZXJlIGNoYXJnZWQgdG8gZGVhbCB3aXRoIHNldmVyYWwgZm9ybWF0IHNwZWNpZmllcnMsIHdpdGggbWFueSBtb3JlXFxub24gdGhlIHRhYmxlIGFzIG9wdGlvbmFsIGFkdmFuY2VkIHRhc2tzLiBJbiB0aGUgZW5kLCB3ZSBmYXJlZCB3ZWxsLCBhbmQgZXZlblxcbmhhZCB0aW1lIHRvIGdldCBzaWxseSAoU2VlIGAlRmApLlxcblxcbmBgYENcXG4jaW5jbHVkZSBcXFwiaG9sYmVydG9uLmhcXFwiXFxuLyoqXFxuICAqIHByaW50X0YgLSBwcmludHMgRipDS1xcbiAgKiBAYXJnczogdGhlIGFyZ3VtZW50cywgYnV0IHRoZXkgZG9uJ3QgbWF0dGVyXFxuICAqXFxuICAqIFJldHVybjogY2hhcmFjdGVycyBwcmludGVkXFxuICAqXFxuICAqL1xcbmludCBwcmludF9GKF9fYXR0cmlidXRlX18gKCh1bnVzZWQpKXZhX2xpc3QgYXJncylcXG57XFxuXFx0Y2hhciAqRiA9IFxcXCJGVUNLXFxcIjtcXG5cXHRpbnQgcmV0VmFsID0gMDtcXG5cXHRpbnQgaTtcXG5cXG5cXHRmb3IgKGkgPSAwOyBpIDwgNDsgaSsrKVxcblxcdHtcXG5cXHRcXHRyZXRWYWwgPSBfcHV0Y2hhcihGW2ldKTtcXG5cXHRpZiAocmV0VmFsID09IC0xKVxcblxcdFxcdHJldHVybiAocmV0VmFsKTtcXG5cXHR9XFxuXFx0cmV0dXJuICg0KTtcXG59XFxuYGBgXFxuXFxuPHA+IDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS90YWJieWthdHovcHJpbnRmXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+Q2hlY2sgaXQgb3V0IG9uIEdpdGh1YjwvYT4gPC9wPlxcblxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./portfolio/printf.md\n");

/***/ })

};;