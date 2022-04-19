window.onload = function () {
    console.log('load')
    const roleString = location.search.split('=')[1]
 //
 //    const marker = document.createElement('a-marker')
 //    marker.setAttribute('id', roleString + '-1')
 //    marker.setAttribute('type', 'barcode')
 //    marker.setAttribute('value', '6')
 //
 //    const entity = document.createElement('a-entity')
 //    entity.setAttribute('id', roleString + '-gltf')
 // /*   entity.setAttribute('position', "0 0.5 0")
 //    entity.setAttribute('rotation', "0 180 0")
 //    entity.setAttribute('scale', "1 1 1")*/
 //    entity.setAttribute('gltf-mode', "#" + roleString)
 //
 //    marker.appendChild(entity)
    //$('#assets').after(marker)
    //document.querySelector('#a-scene').appendChild(marker)
  /*  var arr = document.querySelectorAll('a-marker')
    arr.forEach(e=>{
        console.log(e)
        console.log(e.getAttribute('id'),roleString)
       if( e.getAttribute('id').indexOf(roleString)===-1){
           console.log('delete:',e.getAttribute('id'))
           $(e).remove()
       }
    })*/
}