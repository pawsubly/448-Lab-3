var picURLs = ["https://cdnb.artstation.com/p/assets/images/images/008/114/875/large/robert-kim-wizard-of-legend-robertkim.jpg?1510586213", 
               "https://www.retrozap.com/wp-content/uploads/2018/03/Celeste-Summit.jpg",
               "https://assets.rockpapershotgun.com/images/2018/07/hollow_mech_1.jpg/RPSS/resize/760x-1/format/jpg/quality/90",
               "https://cdn.vox-cdn.com/thumbor/7joTIkStp7d5BFHQRwroALMa_oc=/0x0:1200x675/1200x675/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/62715741/GRIS___Unused_Blossom.0.jpg",
               "https://cdna.artstation.com/p/assets/images/images/003/965/514/large/del-n-screen-shot-2016-11-12-at-7-02-25-pm.jpg?1478995403"]
var counter = 0;

function nextPicture()
{
    this.counter++;
    if(this.counter == 5)
    {
        this.counter = 0;
    }
    console.log(counter)
    document.getElementById("pic").src = this.picURLs[counter]

}

function lastPicture()
{
    this.counter--;
    if(this.counter == -1)
    {
        this.counter = 4;
    }
    document.getElementById("pic").src = this.picURLs[counter]
}