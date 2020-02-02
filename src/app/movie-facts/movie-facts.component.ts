import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-facts',
  templateUrl: './movie-facts.component.html',
  styleUrls: ['./movie-facts.component.scss']
})
export class MovieFactsComponent implements OnInit {
  

  movieTitle;
  funFact;
  factList: Array<string> = [];
  constructor() { }

  factCreator = new FormGroup({
    movieTitle: new FormControl('', Validators.required),
    funFact: new FormControl('', Validators.required),
  })

  showFacts(){
    document.getElementsByTagName('ol')[0].setAttribute('class','showFacts')
  }

  //onSubmit Function for Form
  onSubmit(){
    this.movieTitle = this.factCreator.value.movieTitle
    this.funFact = this.factCreator.value.funFact

    this.factList.push(this.movieTitle)
    this.factList.push(this.funFact)


    console.log(this.factList)


    
    // if(this.factList == []){
    //   this.factList =[-
    //       this.funFact,
    //       this.movieTitle
    //   ]
    //   console.log(this.factList)
    // }
    // else{
    //   this.factList.push(this.funFact)
    //   console.log(this.factList)
    // }

  }

  ngOnInit() {
  }

}
