function start_classification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jHGlmNQwH/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
if(error)
{
    console.error(error);
}else
{
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML = 'I can hear- ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy- ' + (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", "+ random_number_g + ", "+ random_number_b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + ", "+ random_number_g + ", "+ random_number_b + ")";
    
    img = document.getElementById('dog-field')
    img1 = document.getElementById('img_1317')
    img2 = document.getElementById('1200-Cow_female_black_white')
    img3 = document.getElementById('download')

    if(results[0].label == "barking")
    {
img.src='dog-field.jpg';

    }else if(results[0].label == "meowing")
    {
       
        img1.src='img_1317.jpg';
          
    }else if(results[0].label == "mooing")
    {
       
        img2.src='1200-Cow_female_black_white.jpg';
         
    }else{
        
        img3.src='download.jfif';   
    }
}
}
