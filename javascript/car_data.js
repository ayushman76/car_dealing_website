 car_data = () => {
	 var body ,article;
	    body = document.getElementById('body')
        article = document.createElement('article');
        body.appendChild(article);
        article.setAttribute('class', 'article07');
        article.innerHTML += '<div class="container"><div class="row"></div></div>';

        var details = function fl02(img, name, discription, my_id) {
            this.img = img;
            this.name = name;
            this.discription = discription;
            this.my_id = my_id;

        }
        details();
        var data01 = new details('image/ranould_duster.png', 'Renault Duster', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcuLorem ipsum dolor sit amet,', 'renault_car');

        var data02 = new details('image/suzuki_car.png', 'Suzuki Swift', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcuLorem ipsum dolor sit amet,', 'suzuki_car');

        var data03 = new details('image/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486108xwawg.png', 'Honda ', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcuLorem ipsum dolor sit amet,', 'honda_car');

        var data04 = new details('image/blue.png', 'Tata Tiago', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcuLorem ipsum dolor sit amet,', 'tata_car');

        var arr01 = [data01, data02, data03, data04];

        for (var i in arr01) {
            document.querySelector('.article07>.container>.row').innerHTML += `
                <div class="col-md-12">
                    <div class="mycar_data tabcontent" id="${arr01[i].my_id}">
                        <img src="${arr01[i].img}" class="img-responsive">
                        <p class="name">${arr01[i].name}</p>
                        <p>${arr01[i].discription}</p>
                      
                        <i class="fa fa-long-arrow-left cut" style="font-size:24px" onclick="myclose()"></i>
                    </div>    
                </div>
            `;
        }
		
		
		
 }
 car_data();
 
 		
		
 
  

       
