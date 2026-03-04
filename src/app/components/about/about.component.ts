// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html'
// })
// export class AboutComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  // Model for the contact form
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  submitForm() {
    // Simple check to ensure fields are not empty
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log('Form Submitted!', this.contact);
      this.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.submitted = false;
        this.contact = { name: '', email: '', message: '' };
      }, 3000);
    }
  }
}