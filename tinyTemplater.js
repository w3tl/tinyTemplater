fillTemplate = function(template, data) {
  var i = 0,
      result = '';
  
  function replace(props) {
    var prop, html = template.innerHTML.replace(new RegExp(/^[\s]*(\r\n|\n|\r)[\s]*</), '<'),
        regex;
    for(prop in props) {
      regex = new RegExp('\\${' + prop + '}', 'ig');
      html = html.replace(regex, props[prop]);
    }
    return html;
  }
  
  for(; i < data.length; i++) {
    result += replace(data[i]); 
  }
  
  return result;
}

createFromTemplate = function(template, data) {
  var result = document.createElement('DIV');
  result.innerHTML = fillTemplate(template, data);
  return result.firstChild;
}