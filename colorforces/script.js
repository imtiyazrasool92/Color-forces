let table = document.getElementsByTagName("table")[1].rows
if(table[1].getElementsByTagName('td')[1]!=undefined){
    let solved = 0;
    let anchor = document.getElementsByTagName('a')
    for(let i = 0;i < anchor.length;i++){
        anchor[i].style.textDecoration = 'none'
        anchor[i].style.setProperty('color','black','important')
    }
    let st = table[1].getElementsByTagName('td')[3].innerText
    solved = parseInt(st.substr(2,st.length-1));
    for(let i = 1;table[i]!=undefined;i++){
        let row = table[i].getElementsByTagName('td')[1]
        let st = table[i].getElementsByTagName('td')[3].innerText
        let curr_solved = st.substr(2,st.length - 1);
        let opac = 0;
        if(solved > 0 && curr_solved > 0){
            opac = curr_solved/parseFloat(solved);
        }
        console.log(opac)
        if(opac >= 0.60){
            row.style.background = `rgba(144,238,144, ${opac})`
        }else if(opac>=0.40){
            row.style.background = `rgba(173, 216, 230, ${opac})`
        }else if(opac>=0.30){
            row.style.background = `rgba(255,165,0, ${opac})`
        }else{
            row.style.background = `rgba(255, 0, 0, ${opac + 0.1})`
        }
    }
}