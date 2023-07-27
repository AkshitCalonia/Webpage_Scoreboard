document.addEventListener('DOMContentLoaded', function() {
    let s1 = 0;
    let s2 = 0;
    document.querySelector('#maxsub').addEventListener('click', function(event) {
        let defl = document.querySelector("#inp").value;
        window.ans = Number(defl);
        document.querySelector("#info").innerHTML = `Maximum score -> ${defl}`;
        event.preventDefault();
    });

    document.querySelector('#b1').addEventListener('click', function(event) {
        let st = document.querySelector('#sc1');
        s1++;
        st.innerHTML = s1;

        if (s1 == ans && s2<ans)
        {
            document.querySelector('#res').innerHTML = `Team One won by ${s1-s2} scores`;
            document.getElementById('b1').disabled = true;
            document.getElementById('b2').disabled = true;

        }
        else if (s1 == ans && s2 == ans)
        {
            document.querySelector('#res').innerHTML = 'Tie happened!!';
            document.getElementById('b1').disabled = true;
            document.getElementById('b2').disabled = true;

        }
        event.preventDefault();
    });

    document.querySelector('#b2').addEventListener('click', function(event) {
        let st2 = document.querySelector('#sc2');
        s2++;
        st2.innerHTML = s2;
        if (s2 == ans && s1<ans)
        {
            document.querySelector('#res').innerHTML = `Team Two won by ${s2-s1} scores`;
            document.getElementById('b1').disabled = true;
            document.getElementById('b2').disabled = true;

        }
        else if (s1 == ans && s2 == ans)
        {
            document.querySelector('#res').innerHTML = 'Tie happened!!';
            document.getElementById('b1').disabled = true;
            document.getElementById('b2').disabled = true;

        }
        event.preventDefault();
    });

    document.querySelector('#reload').addEventListener('click', function(event) {
        window.location.reload();
        event.preventDefault();
    })
});
