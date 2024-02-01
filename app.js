let cl=console.log;

let moviedata=document.getElementById("moviedata");

result=``;

for(let i=0; i<movieArray.length; i++){
	result+=`
	        <div class="col-md-4">
		  <div class="card mb-4">
		    <figure class="movieCard mb-0">
			  <img src="https://image.tmdb.org/t/p/w500${movieArray[i].poster_path}" alt="">
			   <figcaption>
			     <div class="ratingsection">
				    <div class="row">
					   <div class="col-10">
					      <h3 class="mb-0 title" >${movieArray[i].original_title}</h3>
					   </div>
					   <div class=="col-2">
					      <span>${movieArray[i].vote_average}</span>
					   </div>
					</div>
				 </div>
				 <div class="overviewsection">
				    <h4>${movieArray[i].title}</h4>
					<em>Overview</em>
					<p>${movieArray[i].overview}  </p>
                     
				 </div>
			  </figcaption>
		    </figure>
		  </div>
		 </div>
	`
}

 moviedata.innerHTML=result;