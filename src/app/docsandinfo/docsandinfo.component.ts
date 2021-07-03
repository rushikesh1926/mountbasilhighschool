import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docsandinfo',
  templateUrl: './docsandinfo.component.html',
  styleUrls: ['./docsandinfo.component.css']
})
export class DocsandinfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  onclickupgrade(){
    this.router.navigateByUrl('mainUpgrade');
  }

  onclicknocCert(){
    this.router.navigateByUrl('nocCertificate')
  }

  onclickrenewal(){
    this.router.navigateByUrl('renewalCertificate')
  }

  onClickRecCertificate(){
    this.router.navigateByUrl('recCertificate')
  }

  onSafetyCertificate(){
    this.router.navigateByUrl('safetycertificate')
  }

  onfireSafety(){
    this.router.navigateByUrl('fireSafety')
  }

  onDeoCertificate(){
    this.router.navigateByUrl('deoCertificate')
  }

  onclickwatersanitation(){
    this.router.navigateByUrl('WaterAndSanition')
  }



}
