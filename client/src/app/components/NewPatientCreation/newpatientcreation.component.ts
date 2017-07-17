import { Component, NgModule, Pipe, OnInit, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../commonComponents/tabs';
import { Tab } from '../../commonComponents/tab';
import { CKEditorModule } from 'ng2-ckeditor';
import { DomSanitizer } from '@angular/platform-browser'
import { Observable } from "rxjs/Observable";

import { SymptomModel } from '../../Model/Sympton.Model'
import { Http } from '@angular/http';

@Component({
    selector: 'new-patient-creation',
    templateUrl: './newpatientcreation.component.html'
})
@Pipe({ name: 'safeHtml' })
@NgModule({
    imports: [CKEditorModule, FormsModule, Http],
    declarations: [Tabs, Tab]
})
@Injectable()
export class NewPatientCreationComponent {
    ckeditorContent: string;
    allSymptoms: SymptomModel[] = [];
    symptoms: SymptomModel[] = [];
    symptomsDisplay: string = "";
    pCurrentAddress: string = "";
    pPermanentAddress: string = "";
    sameTempAddress: boolean = false;


    isShowEditor = false;
    previewContent: any;

    todaysDate: string;
    formatedDate: string = "";


    constructor(private sanitized: DomSanitizer, private http: Http) {


        this.todaysDate = this.formatDate((new Date()));



        let s1 = new SymptomModel();
        s1.name = "Insomnia";
        s1.isSelected = false;




        let s2 = new SymptomModel();
        s2.name = "Fear";
        s2.isSelected = false;

        let s3 = new SymptomModel();
        s3.name = "Sucidal Thoughts";
        s3.isSelected = false;

        let s4 = new SymptomModel();
        s4.name = "Over thinking";
        s4.isSelected = false;




        this.allSymptoms.push(s1);
        this.allSymptoms.push(s2);
        this.allSymptoms.push(s3);
        this.allSymptoms.push(s4);

        this.getEditorContent("");
        this.previewContent = this.sanitized.bypassSecurityTrustHtml(this.ckeditorContent);
    }

    formatDate = (date:Date) => {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + '<sup>th</sup> ' + monthNames[monthIndex] + ', ' + year;
    }

    getEditorContent = (smtms: string): string => {
        this.ckeditorContent = `
      <div data-tagInfo="bodyTag" style="padding:0px 15px;border:1px solid lightgray;">
        <h1 style="text-align:center"><span style="color:#696969"><strong>Sankalp Hospital</strong></span></h1>
        <div data-tagInfo="headerRow" style="display:flex;justify-content: space-between">
            <div data-tagInfo="leftHeader" style="text-align:left;float:left;width:50%;">
                <div>
                    <p>Dr. Niket Kasart<br /> MBBS MD (Mumbai)<br /> Email: niket.kasar@gmail.com<br /> Contact: 9985457854/9854525458</p>
                </div>
            </div>
            <div data-tagInfo="rightHeader" style="text-align:right;float:right;width:50%;">

                <table align="right">
                    <tbody>
                        <tr>
                            <th style="text-align:right;">Patient Name:</th>
                            <td style="text-align:left;"> Amit Kumar Arora</td>
                        </tr>

                        <tr>
                            <th style="text-align: right">Date:</th>
                            <td style="text-align:left;"> `+  this.todaysDate + `</td>
                             
                        </tr>


                    </tbody>

                </table>

            </div>
        </div>
        <hr style="border-color:darkgray" />

        <div data-tagInfo="middleBodyPart" style="word-break: keep-all;">
            <p>
                <b>Mr Amit Kumar</b> This is one of the simpler, no-frills text generators based only on Lorem Ipsum. You
                basically are only able to adjust the amount of paragraphs or words. You can also create bulleted lists or
                generate your text based on how many bytes it should be. A nice addition here, is that it offers you some
                background information on the use and history of ‘Lorem Ipsum.’ This is one of the simpler, no-frills text
                generators based only on Lorem Ipsum. You basically are only able to adjust the amount of paragraphs or words.
                You can also create bulleted lists or generate your text based on how many bytes it should be. A nice addition
                here, is that it offers you some background information on the use and history of ‘Lorem Ipsum.’
            </p>
            <p>
               <strong> He has been found with following symtoms: `+ smtms + `</strong>
            </p>
            <p>
                This is one of the simpler, no-frills text generators based only on Lorem Ipsum. You basically are only able to adjust the
                amount of paragraphs or words. You can also create bulleted lists or generate your text based on how many
                bytes it should be. A nice addition here, is that it offers you some background information on the use and
                history of ‘Lorem Ipsum.’ This is one of the simpler, no-frills text generators based only on Lorem Ipsum.
                You basically are only able to adjust the amount of paragraphs or words. You can also create bulleted lists
                or generate your text based on how many bytes it should be. A nice addition here, is that it offers you some
                background information on the use and history of ‘Lorem Ipsum.’
            </p>

            <p>
                This is one of the simpler, no-frills text generators based only on Lorem Ipsum. You basically are only able to adjust the
                amount of paragraphs or words. You can also create bulleted lists or generate your text based on how many
                bytes it should be. A nice addition here, is that it offers you some background information on the use and
                history of ‘Lorem Ipsum.’ This is one of the simpler, no-frills text generators based only on Lorem Ipsum.
                You basically are only able to adjust the amount of paragraphs or words. You can also create bulleted lists
                or generate your text based on how many bytes it should be. A nice addition here, is that it offers you some
                background information on the use and history of ‘Lorem Ipsum.’
            </p>

        </div>
        <hr style="border-color:darkgray" />

        <div data-tagInfo="footer" style="margin:80px 10px 20px 10px;">
            <div data-tagInfo="footerRow" style="display:flex;justify-content: space-between">
                <div data-tagInfo="leftFooter" style="float:left;width:50%;">
                    <b>Patient's Signature</b>
                </div>

                <div data-tagInfo="rightFooter" style="float:right">
                    <b>Doctors Signature</b>
                </div>
            </div>
        </div>
    </div data-tagInfo="bodyTagClosed">
 
 `;
        return this.ckeditorContent;
    }

    preview = () => {
        this.previewContent = this.sanitized.bypassSecurityTrustHtml(this.ckeditorContent);
        this.isShowEditor = false;
    }

    showEditorCk = () => {
        this.isShowEditor = true;
    }

    addSymptons = (sym: SymptomModel) => {


        if (!sym.isSelected) {
            this.symptoms = this.symptoms.filter(item => item.name !== sym.name);
        }
        else {
            this.symptoms.push(sym);
        }

        this.symptomsDisplay = this.symptoms.map(function (element) {
            return element.name;
        }).join(", ");


        this.getEditorContent(this.symptomsDisplay);
        this.previewContent = this.sanitized.bypassSecurityTrustHtml(this.ckeditorContent);

    }

    copyTempAddressToPerAddress = (): void => {
        if (this.sameTempAddress) {
            this.pPermanentAddress = "";
        } else {

            this.pPermanentAddress = this.pCurrentAddress;
        }

        this.sameTempAddress = !this.sameTempAddress;
    }

    downloadCaseStudyFile = (): void => {
        alert('file downloading 1');

        // let p=new Promise((resolve,reject)=>{
        //     this.http.get("/saiDownload").subscribe(r=>{
        //         console.log("saibaba1");
        //         console.log(r);
        //     });
        // });
    }
}