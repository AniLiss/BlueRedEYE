import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-add-complex-dialog',
  templateUrl: './addComplexDialog.component.html',
  styleUrls: ['./addComplexDialog.component.scss']
})
export class AddComplexDialogComponent {
  name: string;
  dueDate: Date;

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<AddComplexDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  add() {
    if (!this.data.id || !this.name || !this.dueDate) {
      return;
    }

    this.dataService.addComplex(this.data.id, this.name, this.dueDate).subscribe(x => {
      this.dialogRef.close(x['complex']);
    })
  }
}
