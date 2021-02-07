
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1BTGeASSwhAhyn4ffF88dM3rNcx4zSIl9GFpEDgl_CFc/edit?usp=sharing';

  function init() {
    Tabletop.init( {
      key: publicSpreadsheetUrl,
      callback: showInfo,
      simpleSheet: true 
    } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init)



function showInfo(data, tabletop) {
  data.forEach(function(data) {
    title1.innerHTML = data.title1;
    title2.innerHTML = data.title2;
    title3.innerHTML = data.title3;
    title4.innerHTML = data.title4;
    title5.innerHTML = data.title5;
    title6.innerHTML = data.title6;
    title7.innerHTML = data.title7;
    title8.innerHTML = data.title8;
    title9.innerHTML = data.title9;
    mrp1.innerHTML = data.mrp1;
    mrp2.innerHTML = data.mrp2;
    mrp3.innerHTML = data.mrp3;
    mrp4.innerHTML = data.mrp4;
    mrp5.innerHTML = data.mrp5;
    mrp6.innerHTML = data.mrp6;
    mrp7.innerHTML = data.mrp7;
    mrp8.innerHTML = data.mrp8;
    mrp9.innerHTML = data.mrp9;
    sale1.innerHTML = data.sale1;
    sale2.innerHTML = data.sale2;
    sale3.innerHTML = data.sale3;
    sale4.innerHTML = data.sale4;
    sale5.innerHTML = data.sale5;
    sale6.innerHTML = data.sale6;
    sale7.innerHTML = data.sale7;
    sale8.innerHTML = data.sale8;
    sale9.innerHTML = data.sale9;
 });
}
window.addEventListener('DOMContentLoaded', init)
