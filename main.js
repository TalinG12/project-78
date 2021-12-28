var images = [
  "https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://i.postimg.cc/wjMnFtMX/father.jpg" ,  "cute-boy-cartoon-illustration-90163697 (1).jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"                          ,"https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg",
"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37252802.jpg"            ,"https://img.favpng.com/6/20/19/drawing-grandmother-character-png-favpng-Mja0VdXF03EgECnHQThSz0tzq.jpg"  
];
var names = ["Family Book", "Anuj (Father)",  "Talin (Me)", "Payal (Mother)","VP Bhatia (Maternal Grandfather)","Kanta Bhatia (Maternal Grandmother)", "SK Gandhi (Paternal Granfather)"  , "Veena Gandhi (Paternal Grandmother)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}