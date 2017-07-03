import { Component, NgModule, Pipe,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../commonComponents/tabs';
import { Tab } from '../../commonComponents/tab';
import { CKEditorModule } from 'ng2-ckeditor';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'new-patient-creation',
  templateUrl: './newpatientcreation.component.html'
})
@Pipe({ name: 'safeHtml' })
@NgModule({
  imports: [CKEditorModule, FormsModule],
  declarations: [Tabs, Tab]
})
export class NewPatientCreationComponent{
  ckeditorContent = `
      <html>

<head>
    <title></title>
</head>

<body>
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
                            <td style="text-align:left;">Amit Kumar Arora</td>
                        </tr>

                        <tr>
                            <th style="text-align: right">Date:</th>
                            <td style="text-align:left;">31 March, 2017</td>
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
                He has been found with following symtoms: symtomsList
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
  isShowEditor = false;
  previewContent:any;
  constructor(private sanitized: DomSanitizer) {
    this.previewContent = this.sanitized.bypassSecurityTrustHtml(this.ckeditorContent);
  }

  preview = ()=> {
    this.previewContent = this.sanitized.bypassSecurityTrustHtml(this.ckeditorContent);
    this.isShowEditor = false;
  }

  showEditorCk = () => {
    this.isShowEditor = true;
  }

}