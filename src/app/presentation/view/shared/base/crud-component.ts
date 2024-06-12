import { Component } from '@angular/core';
import { OnInit, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: '',
})
export abstract class CrudComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submeter = false;
  activatedRoute: ActivatedRoute;
  router: Router;
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: null,
  };

  constructor(injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
  }

  ngOnInit(): void {
    // this.criarFormulario()
    // this.pegarDados()
  }

  // abstract criarFormulario(): void

  // abstract pegarDados(): void

  validarDados() {
    this.submeter = true;

    if (this.form.invalid) {
      return;
    }

    return true;
  }

  // persistirDados() {
  //   if (this.validarDados()) {
  //     this.requisitarPersistencia()
  //   }
  // }

  // requisitarPersistencia() {
  //   this.servico.salvar(this.pegarModelo).subscribe(() => {
  //     this.pegarDados()
  //   })
  // }

  // excluirItem(item: any) {
  //   this.servico.deletar(item.id).subscribe(() => {
  //     this.pegarDados()
  //   })
  // }

  editarItem(item: any) {
    this.form.patchValue(item);
  }

  limpar() {
    this.submeter = false;
    this.form.reset();
  }

  get pegarModelo() {
    return this.form.getRawValue().id ? this.modeloPut() : this.modeloPost();
  }

  protected modeloPost() {
    const model = this.form.getRawValue();
    delete model.id;
    return model;
  }

  protected modeloPut() {
    return this.form.getRawValue();
  }

  protected get id(): number {
    return this.activatedRoute.snapshot.params['id'];
  }
}
