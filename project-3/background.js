let timezoneEl = document.querySelector('#daily');
        // tempEl.innerText = 'Test';

        const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&daily=sunrise,sunset&timezone=America%2FNew_York';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data["daily"]["sunset"][0]);

                timezoneEl.innerText = (data["daily"]["sunrise"][0]); // cmd + shift + ] = ' // + data["daily"]["sunrise"][0])
                // timezoneEl.innerText = ('Today’s sunrise time is ' + data["daily"]["sunrise"][0]); // cmd + shift + ] = ' // + data["daily"]["sunrise"][0])
                let sunset = data["daily"]["sunrise"][0];
                let sunsetDate = new Date(sunset);
                let now = new Date();
                if (now < sunsetDate) {
                    document.body.style.background = 'linear-gradient(to right, #E3FC95, #C4FDF1, #F3F687)';
                } else {
                    document.body.style.background = 'linear-gradient(to bottom, #8794FE 20%, #70CDFE, #5FE3FE, #ACF2FE)';;
                    // 'linear-gradient(to bottom, #8794FE 20%, #70CDFE, #5FE3FE, #ACF2FE)';
                }
                // let sunset = data["daily"]["sunset"][0];
                // timezoneEl.style.animation = data["daily"]["sunset"][0] + 's blink infinite';
    
            });
