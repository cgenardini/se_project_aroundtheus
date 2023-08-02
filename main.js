!function(){"use strict";class e{constructor(e,t){let{data:n,handleImagePreview:i}=e;this._name=n.title,this._link=n.link,this._handleImagePreview=i,this._cardSelector=t}_handleLikeButton(){this._elementLikeButton.classList.toggle("card_button-like_active")}_handleDeleteButton(){this._element.remove()}_setEventListeners(){this._elementDeleteButton.addEventListener("click",(()=>this._handleDeleteButton())),this._elementImage.addEventListener("click",(()=>this._handleImagePreview({name:this._name,link:this._link}))),this._elementLikeButton.addEventListener("click",(()=>this._handleLikeButton()))}getView(){return this._element=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._elementTitle=this._element.querySelector(".card__description"),this._elementImage=this._element.querySelector(".card__image"),this._elementDeleteButton=this._element.querySelector(".card__button-delete"),this._elementLikeButton=this._element.querySelector(".card__button-like"),this._elementTitle.textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._setEventListeners(),this._element}}var t=class{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._errorClass=e.errorClass,this._formElement=t}_showInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_enableButton(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}disableButton(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}_toggleButton(){let e=!1;this._inputElements.forEach((t=>{if(!t.validity.valid)return e=!0})),e?this.disableButton():this._enableButton()}resetValidation(){this._toggleButton(),this._inputElements.forEach((e=>{this._hideInputError(e)}))}_setEventListeners(){this._inputElements=[...this._formElement.querySelectorAll(this._inputSelector)],this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputElements.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButton()}))}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault})),this._setEventListeners()}};document.querySelector("#modal-image"),document.querySelector(".modal__image"),document.querySelector(".modal__image-title"),document.querySelector(".gallery__cards");const n=document.querySelector(".profile__button_type_edit"),i=document.querySelector(".profile__button_type_add"),o=(document.querySelector("#add_submit-button"),document.querySelector("#modal-edit"),document.querySelector("#modal-add"),document.querySelectorAll(".modal__close")),s=document.querySelector(".modal__container"),l=document.querySelector("#container-add"),r=document.querySelector("#container-edit"),a=s.querySelector(".modal__input_type_name"),u=s.querySelector(".modal__input_type_job");document.querySelector(".profile__name"),document.querySelector(".profile__job-title");class c{constructor(e){this._popupElement=document.querySelector(e)}open(){this._popupElement.classList.add("modal_open"),this.setEventListeners()}close(){this._popupElement.classList.remove("modal_open"),this.removeEventListeners()}_handleEscClose=e=>{"Escape"===e.key&&this.close()};_handleClickOutside=e=>{e.target.classList.contains("modal_open")&&this.close()};_handleCloseButtons=()=>{o.forEach((e=>{e.addEventListener("click",(()=>this.close()))}))};setEventListeners(){document.addEventListener("mousedown",this._handleClickOutside),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._handleCloseButtons)}removeEventListeners(){document.removeEventListener("mousedown",this._handleClickOutside),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._handleCloseButtons)}}class m extends c{constructor(e,t){super(e),this._popupForm=this._popupElement.querySelector(".modal__container"),this._handleFormSubmit=t}_getInputValues(){const e=this._popupForm.querySelectorAll(".modal__input"),t={};return e.forEach((e=>{t[e.name]=e.value})),t}open(){super.open()}setEventListeners(){this._popupForm.addEventListener("submit",this._handleSubmitListener),super.setEventListeners()}removeEventListeners(){this._popupForm.removeEventListener("submit",this._handleSubmitListener),super.removeEventListeners()}_handleSubmitListener=e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())};close(){this._popupForm.reset(),super.close()}}n.addEventListener("click",(()=>{const e=v.getUserInfo();a.value=e.userName,u.value=e.userJob,E.open()})),i.addEventListener("click",(function(e){h.disableButton(),f.open()}));const d={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},_=new t(d,r),h=new t(d,l);_.enableValidation(),h.enableValidation();const p=new class{constructor(e,t){let{renderer:n}=e;this._renderer=n,this._container=document.querySelector(t)}rendererItems(e){e.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({renderer:e=>{b(e)}},".gallery__cards"),b=t=>{const n=new e({data:t,handleImagePreview:e=>{y.open(e)}},"#card-template");p.addItem(n.getView())},f=new m("#modal-add",(e=>{const t=e.title,n=e.link;b({title:t,link:n}),f.close()})),E=new m("#modal-edit",(e=>{const t=e.name,n=e.job;v.setUserInfo({nameInput:t,jobInput:n}),E.close()})),v=new class{constructor(e){let{nameSelector:t,jobTitleSelector:n}=e;this._name=document.querySelector(t),this._jobTitle=document.querySelector(n)}getUserInfo(){return{userName:this._name.textContent,userJob:this._jobTitle.textContent}}setUserInfo(e){let{nameInput:t,jobInput:n}=e;this._name.textContent=t,this._jobTitle.textContent=n}}({nameSelector:".profile__name",jobTitleSelector:".profile__job-title"}),y=new class extends c{constructor(e){super(e),this._image=this._popupElement.querySelector(".modal__image"),this._imageTitle=this._popupElement.querySelector(".modal__image-title")}open(e){let{name:t,link:n}=e;this._imageTitle.textContent=t,this._image.src=n,this._image.alt=t,super.open()}}("#modal-image");p.rendererItems([{title:"Rome",link:"https://images.unsplash.com/photo-1581274050302-581149d3b4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80"},{title:"Bali",link:"https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},{title:"Croatia",link:"https://images.unsplash.com/photo-1454452176678-c0437432bba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{title:"Cambodia",link:"https://images.unsplash.com/photo-1609949165382-2e442783c8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"},{title:"Oaxaca",link:"https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{title:"Greece",link:"https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}])}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQWUsTUFBTUEsRUFDbkJDLFdBQUFBLENBQVdDLEVBQStCQyxHQUFjLElBQTVDLEtBQUVDLEVBQUksbUJBQUVDLEdBQW9CSCxFQUN0Q0ksS0FBS0MsTUFBUUgsRUFBS0ksTUFDbEJGLEtBQUtHLE1BQVFMLEVBQUtNLEtBQ2xCSixLQUFLSyxvQkFBc0JOLEVBRTNCQyxLQUFLTSxjQUFnQlQsQ0FDdkIsQ0FFQVUsaUJBQUFBLEdBQ0VQLEtBQUtRLG1CQUFtQkMsVUFBVUMsT0FBTywwQkFDM0MsQ0FFQUMsbUJBQUFBLEdBQ0VYLEtBQUtZLFNBQVNDLFFBQ2hCLENBRUFDLGtCQUFBQSxHQUNFZCxLQUFLZSxxQkFBcUJDLGlCQUFpQixTQUFTLElBQ2xEaEIsS0FBS1csd0JBRVBYLEtBQUtpQixjQUFjRCxpQkFBaUIsU0FBUyxJQUMzQ2hCLEtBQUtLLG9CQUFvQixDQUFFYSxLQUFNbEIsS0FBS0MsTUFBT0csS0FBTUosS0FBS0csVUFFMURILEtBQUtRLG1CQUFtQlEsaUJBQWlCLFNBQVMsSUFDaERoQixLQUFLTyxxQkFFVCxDQUVBWSxPQUFBQSxHQW1CRSxPQWxCQW5CLEtBQUtZLFNBQVdRLFNBQ2JDLGNBQWNyQixLQUFLTSxlQUNuQmdCLFFBQVFELGNBQWMsU0FDdEJFLFdBQVUsR0FFYnZCLEtBQUt3QixjQUFnQnhCLEtBQUtZLFNBQVNTLGNBQWMsc0JBQ2pEckIsS0FBS2lCLGNBQWdCakIsS0FBS1ksU0FBU1MsY0FBYyxnQkFDakRyQixLQUFLZSxxQkFBdUJmLEtBQUtZLFNBQVNTLGNBQ3hDLHdCQUVGckIsS0FBS1EsbUJBQXFCUixLQUFLWSxTQUFTUyxjQUFjLHNCQUV0RHJCLEtBQUt3QixjQUFjQyxZQUFjekIsS0FBS0MsTUFDdENELEtBQUtpQixjQUFjUyxJQUFNMUIsS0FBS0csTUFDOUJILEtBQUtpQixjQUFjVSxJQUFNM0IsS0FBS0MsTUFFOUJELEtBQUtjLHFCQUVFZCxLQUFLWSxRQUNkLEVDMkNGLE1BNUZBLE1BQ0VqQixXQUFBQSxDQUFZaUMsRUFBU0MsR0FDbkI3QixLQUFLOEIsZUFBaUJGLEVBQVFHLGNBQzlCL0IsS0FBS2dDLHNCQUF3QkosRUFBUUsscUJBQ3JDakMsS0FBS2tDLHFCQUF1Qk4sRUFBUU8sb0JBQ3BDbkMsS0FBS29DLFlBQWNSLEVBQVFTLFdBRTNCckMsS0FBS3NDLGFBQWVULENBQ3RCLENBRUFVLGVBQUFBLENBQWdCQyxHQUNkLE1BQU1DLEVBQWV6QyxLQUFLc0MsYUFBYWpCLGNBQ3BDLElBQUdtQixFQUFhRSxZQUVuQkYsRUFBYS9CLFVBQVVrQyxJQUFJM0MsS0FBSzRDLGtCQUNoQ0gsRUFBYWhCLFlBQWNlLEVBQWFLLGlCQUMxQyxDQUVBQyxlQUFBQSxDQUFnQk4sR0FDZCxNQUFNQyxFQUFlekMsS0FBS3NDLGFBQWFqQixjQUNwQyxJQUFHbUIsRUFBYUUsWUFFbkJGLEVBQWEvQixVQUFVSSxPQUFPYixLQUFLNEMsa0JBQ25DSCxFQUFhaEIsWUFBYyxFQUM3QixDQUVBc0IsbUJBQUFBLENBQW9CUCxHQUNiQSxFQUFhUSxTQUFTQyxNQUkzQmpELEtBQUs4QyxnQkFBZ0JOLEdBSG5CeEMsS0FBS3VDLGdCQUFnQkMsRUFJekIsQ0FFQVUsYUFBQUEsR0FDRWxELEtBQUttRCxlQUFlMUMsVUFBVUksT0FBT2IsS0FBS2tDLHNCQUMxQ2xDLEtBQUttRCxlQUFlQyxVQUFXLENBQ2pDLENBRUFDLGFBQUFBLEdBQ0VyRCxLQUFLbUQsZUFBZTFDLFVBQVVrQyxJQUFJM0MsS0FBS2tDLHNCQUN2Q2xDLEtBQUttRCxlQUFlQyxVQUFXLENBQ2pDLENBRUFFLGFBQUFBLEdBQ0UsSUFBSUMsR0FBZSxFQUVuQnZELEtBQUt3RCxlQUFlQyxTQUFTakIsSUFDM0IsSUFBS0EsRUFBYVEsU0FBU0MsTUFDekIsT0FBUU0sR0FBZSxDQUN6QixJQUdFQSxFQUNGdkQsS0FBS3FELGdCQUdQckQsS0FBS2tELGVBQ1AsQ0FFQVEsZUFBQUEsR0FDRTFELEtBQUtzRCxnQkFFTHRELEtBQUt3RCxlQUFlQyxTQUFTakIsSUFDM0J4QyxLQUFLOEMsZ0JBQWdCTixFQUFhLEdBRXRDLENBRUExQixrQkFBQUEsR0FDRWQsS0FBS3dELGVBQWlCLElBQ2pCeEQsS0FBS3NDLGFBQWFxQixpQkFBaUIzRCxLQUFLOEIsaUJBRTdDOUIsS0FBS21ELGVBQWlCbkQsS0FBS3NDLGFBQWFqQixjQUN0Q3JCLEtBQUtnQyx1QkFHUGhDLEtBQUt3RCxlQUFlQyxTQUFTakIsSUFDM0JBLEVBQWF4QixpQkFBaUIsU0FBVTRDLElBQ3RDNUQsS0FBSytDLG9CQUFvQlAsR0FDekJ4QyxLQUFLc0QsZUFBZSxHQUNwQixHQUVOLENBRUFPLGdCQUFBQSxHQUNFN0QsS0FBS3NDLGFBQWF0QixpQkFBaUIsVUFBVzRDLElBQzVDQSxFQUFJRSxjQUFjLElBRXBCOUQsS0FBS2Msb0JBQ1AsR0N6RndCTSxTQUFTQyxjQUFjLGdCQUN2QkQsU0FBU0MsY0FBYyxpQkFDbEJELFNBQVNDLGNBQWMsdUJBNkJ4QkQsU0FBU0MsY0FBYyxtQkEvQjlDLE1Ba0NNMEMsRUFBYTNDLFNBQVNDLGNBQWMsOEJBQ3BDMkMsRUFBWTVDLFNBQVNDLGNBQWMsNkJBTW5DNEMsR0FMa0I3QyxTQUFTQyxjQUFjLHNCQUU3QkQsU0FBU0MsY0FBYyxlQUN4QkQsU0FBU0MsY0FBYyxjQUVuQkQsU0FBU3VDLGlCQUFpQixrQkFFekNPLEVBQXFCOUMsU0FBU0MsY0FBYyxxQkFDNUM4QyxFQUFpQi9DLFNBQVNDLGNBQWMsa0JBR3hDK0MsRUFBa0JoRCxTQUFTQyxjQUFjLG1CQUV6Q2dELEVBQVlILEVBQW1CN0MsY0FDMUMsMkJBRVdpRCxFQUFXSixFQUFtQjdDLGNBQ3pDLDBCQUd5QkQsU0FBU0MsY0FBYyxrQkFDeEJELFNBQVNDLGNBQWMsdUJDdkRsQyxNQUFNa0QsRUFDbkI1RSxXQUFBQSxDQUFZNkUsR0FDVnhFLEtBQUt5RSxjQUFnQnJELFNBQVNDLGNBQWNtRCxFQUM5QyxDQUVBRSxJQUFBQSxHQUNFMUUsS0FBS3lFLGNBQWNoRSxVQUFVa0MsSUFBSSxjQUNqQzNDLEtBQUsyRSxtQkFDUCxDQUVBQyxLQUFBQSxHQUNFNUUsS0FBS3lFLGNBQWNoRSxVQUFVSSxPQUFPLGNBQ3BDYixLQUFLNkUsc0JBQ1AsQ0FFQUMsZ0JBQW1CbEIsSUFDRCxXQUFaQSxFQUFJbUIsS0FDTi9FLEtBQUs0RSxPQUNQLEVBR0ZJLG9CQUF1QnBCLElBQ2pCQSxFQUFJcUIsT0FBT3hFLFVBQVV5RSxTQUFTLGVBQ2hDbEYsS0FBSzRFLE9BQ1AsRUFHRk8sb0JBQXNCQSxLQUNwQmxCLEVBQWFSLFNBQVMyQixJQUNwQkEsRUFBT3BFLGlCQUFpQixTQUFTLElBQU1oQixLQUFLNEUsU0FBUSxHQUNwRCxFQUdKRCxpQkFBQUEsR0FDRXZELFNBQVNKLGlCQUFpQixZQUFhaEIsS0FBS2dGLHFCQUM1QzVELFNBQVNKLGlCQUFpQixVQUFXaEIsS0FBSzhFLGlCQUUxQzFELFNBQVNKLGlCQUFpQixRQUFTaEIsS0FBS21GLG9CQUMxQyxDQUVBTixvQkFBQUEsR0FDRXpELFNBQVNpRSxvQkFBb0IsWUFBYXJGLEtBQUtnRixxQkFDL0M1RCxTQUFTaUUsb0JBQW9CLFVBQVdyRixLQUFLOEUsaUJBQzdDMUQsU0FBU2lFLG9CQUFvQixRQUFTckYsS0FBS21GLG9CQUM3QyxFQzVDYSxNQUFNRyxVQUFzQmYsRUFDekM1RSxXQUFBQSxDQUFZNkUsRUFBZWUsR0FDekJDLE1BQU1oQixHQUNOeEUsS0FBS3lGLFdBQWF6RixLQUFLeUUsY0FBY3BELGNBQWMscUJBQ25EckIsS0FBSzBGLGtCQUFvQkgsQ0FDM0IsQ0FFQUksZUFBQUEsR0FDRSxNQUFNQyxFQUFjNUYsS0FBS3lGLFdBQVc5QixpQkFBaUIsaUJBQy9Da0MsRUFBWSxDQUFDLEVBSW5CLE9BSEFELEVBQVluQyxTQUFTcUMsSUFDbkJELEVBQVVDLEVBQU01RSxNQUFRNEUsRUFBTUMsS0FBSyxJQUU5QkYsQ0FDVCxDQUVBbkIsSUFBQUEsR0FDRWMsTUFBTWQsTUFFUixDQUVBQyxpQkFBQUEsR0FDRTNFLEtBQUt5RixXQUFXekUsaUJBQWlCLFNBQVVoQixLQUFLZ0csdUJBQ2hEUixNQUFNYixtQkFDUixDQUVBRSxvQkFBQUEsR0FDRTdFLEtBQUt5RixXQUFXSixvQkFBb0IsU0FBVXJGLEtBQUtnRyx1QkFDbkRSLE1BQU1YLHNCQUNSLENBRUFtQixzQkFBeUJwQyxJQUN2QkEsRUFBSUUsaUJBQ0o5RCxLQUFLMEYsa0JBQWtCMUYsS0FBSzJGLGtCQUFrQixFQUdoRGYsS0FBQUEsR0FDRTVFLEtBQUt5RixXQUFXUSxRQUNoQlQsTUFBTVosT0FFUixFQ2JGYixFQUFXL0MsaUJBQWlCLFNBQVMsS0FDbkMsTUFBTWtGLEVBQVdDLEVBQWdCQyxjQUNqQy9CLEVBQVUwQixNQUFRRyxFQUFTRyxTQUMzQi9CLEVBQVN5QixNQUFRRyxFQUFTSSxRQUMxQkMsRUFBWTdCLE1BQU0sSUFHcEJWLEVBQVVoRCxpQkFBaUIsU0FBUyxTQUFVNEMsR0FDNUM0QyxFQUFpQm5ELGdCQUVqQm9ELEVBQWEvQixNQUNmLElBSUEsTUFBTTlDLEVBQVUsQ0FDZEcsY0FBZSxnQkFDZkUscUJBQXNCLGlCQUN0QkUsb0JBQXFCLHlCQUNyQnVFLGdCQUFpQiwwQkFDakJyRSxXQUFZLHdCQUdSc0UsRUFBb0IsSUFBSUMsRUFBY2hGLEVBQVN3QyxHQUMvQ29DLEVBQW1CLElBQUlJLEVBQWNoRixFQUFTdUMsR0FFcER3QyxFQUFrQjlDLG1CQUNsQjJDLEVBQWlCM0MsbUJBSWpCLE1BQU1nRCxFQUFjLElDNURMLE1BQ2JsSCxXQUFBQSxDQUFXQyxFQUFla0gsR0FBbUIsSUFBakMsU0FBRUMsR0FBVW5ILEVBQ3RCSSxLQUFLZ0gsVUFBWUQsRUFDakIvRyxLQUFLaUgsV0FBYTdGLFNBQVNDLGNBQWN5RixFQUMzQyxDQUVBSSxhQUFBQSxDQUFjQyxHQUNaQSxFQUFNMUQsU0FBUzJELElBQ2JwSCxLQUFLZ0gsVUFBVUksRUFBSyxHQUV4QixDQUVBQyxPQUFBQSxDQUFRQyxHQUNOdEgsS0FBS2lILFdBQVdNLFFBQVFELEVBQzFCLEdEK0NBLENBQ0VQLFNBQVdqSCxJQUNUMEgsRUFBVzFILEVBQUssR0gvQmUsbUJHdUMvQjBILEVBQWMxSCxJQUNsQixNQUFNMkgsRUFBYyxJQUFJL0gsRUFDdEIsQ0FDRUksT0FDQUMsbUJBQXFCMkgsSUFDbkJDLEVBQWFqRCxLQUFLZ0QsRUFBVSxHSGZSLGtCR29CMUJiLEVBQVlRLFFBQVFJLEVBQVl0RyxVQUFVLEVBR3RDc0YsRUFBZSxJQUFJbkIsRUh2Q00sY0d1QzBCeEYsSUFDdkQsTUFBTUksRUFBUUosRUFBS0ksTUFDYkUsRUFBT04sRUFBS00sS0FNbEJvSCxFQUxpQixDQUNmdEgsUUFDQUUsU0FLRnFHLEVBQWE3QixPQUFPLElBS2hCMkIsRUFBYyxJQUFJakIsRUhyRFEsZUdxRHlCeEYsSUFDdkQsTUFBTW9CLEVBQU9wQixFQUFLb0IsS0FDWjBHLEVBQU05SCxFQUFLOEgsSUFDakJ6QixFQUFnQjBCLFlBQVksQ0FDMUJ4RCxVQUFXbkQsRUFDWG9ELFNBQVVzRCxJQUdackIsRUFBWTNCLE9BQU8sSUFLZnVCLEVBQWtCLElFaEhULE1BQ2J4RyxXQUFBQSxDQUFXQyxHQUFxQyxJQUFwQyxhQUFFa0ksRUFBWSxpQkFBRUMsR0FBa0JuSSxFQUM1Q0ksS0FBS0MsTUFBUW1CLFNBQVNDLGNBQWN5RyxHQUNwQzlILEtBQUtnSSxVQUFZNUcsU0FBU0MsY0FBYzBHLEVBQzFDLENBRUEzQixXQUFBQSxHQUtFLE1BSmlCLENBQ2ZDLFNBQVVyRyxLQUFLQyxNQUFNd0IsWUFDckI2RSxRQUFTdEcsS0FBS2dJLFVBQVV2RyxZQUc1QixDQUVBb0csV0FBQUEsQ0FBV0ksR0FBMEIsSUFBekIsVUFBRTVELEVBQVMsU0FBRUMsR0FBVTJELEVBQ2pDakksS0FBS0MsTUFBTXdCLFlBQWM0QyxFQUN6QnJFLEtBQUtnSSxVQUFVdkcsWUFBYzZDLENBQy9CLEdGK0ZtQyxDQUNuQ3dELGFIdkRpQyxpQkd3RGpDQyxpQkh2RGdDLHdCRzRENUJKLEVBQWUsSUdySE4sY0FBNkJwRCxFQUMxQzVFLFdBQUFBLENBQVk2RSxHQUNWZ0IsTUFBTWhCLEdBQ054RSxLQUFLa0ksT0FBU2xJLEtBQUt5RSxjQUFjcEQsY0FBYyxpQkFDL0NyQixLQUFLbUksWUFBY25JLEtBQUt5RSxjQUFjcEQsY0FBYyxzQkFDdEQsQ0FFQXFELElBQUFBLENBQUk5RSxHQUFpQixJQUFoQixLQUFFc0IsRUFBSSxLQUFFZCxHQUFNUixFQUNqQkksS0FBS21JLFlBQVkxRyxZQUFjUCxFQUMvQmxCLEtBQUtrSSxPQUFPeEcsSUFBTXRCLEVBQ2xCSixLQUFLa0ksT0FBT3ZHLElBQU1ULEVBQ2xCc0UsTUFBTWQsTUFDUixHTmlEK0IsZ0JHNERqQ21DLEVBQVlLLGNIdkhnQixDQUMxQixDQUNFaEgsTUFBTyxPQUNQRSxLQUFNLGtLQUVSLENBQ0VGLE1BQU8sT0FDUEUsS0FBTSw4SkFFUixDQUNFRixNQUFPLFVBQ1BFLEtBQU0sa0tBRVIsQ0FDRUYsTUFBTyxXQUNQRSxLQUFNLGlLQUVSLENBQ0VGLE1BQU8sU0FDUEUsS0FBTSxrS0FFUixDQUNFRixNQUFPLFNBQ1BFLEtBQU0sa0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIGhhbmRsZUltYWdlUHJldmlldyB9LCBjYXJkU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9uYW1lID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2hhbmRsZUltYWdlUHJldmlldyA9IGhhbmRsZUltYWdlUHJldmlldztcblxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlQnV0dG9uKCkge1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX2J1dHRvbi1saWtlX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIF9oYW5kbGVEZWxldGVCdXR0b24oKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQnV0dG9uKClcbiAgICApO1xuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuX2hhbmRsZUltYWdlUHJldmlldyh7IG5hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmsgfSlcbiAgICApO1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbigpXG4gICAgKTtcbiAgfVxuXG4gIGdldFZpZXcoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICB0aGlzLl9lbGVtZW50VGl0bGUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVzY3JpcHRpb25cIik7XG4gICAgdGhpcy5fZWxlbWVudEltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuICAgIHRoaXMuX2VsZW1lbnREZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jYXJkX19idXR0b24tZGVsZXRlXCJcbiAgICApO1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2J1dHRvbi1saWtlXCIpO1xuXG4gICAgdGhpcy5fZWxlbWVudFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UuYWx0ID0gdGhpcy5fbmFtZTtcblxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IG9wdGlvbnMuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IG9wdGlvbnMuc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IG9wdGlvbnMuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gb3B0aW9ucy5lcnJvckNsYXNzO1xuXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgfVxuXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICB9XG5cbiAgX2VuYWJsZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBfdG9nZ2xlQnV0dG9uKCkge1xuICAgIGxldCBpbnZhbGlkSW5wdXQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICByZXR1cm4gKGludmFsaWRJbnB1dCA9IHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGludmFsaWRJbnB1dCkge1xuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpO1xuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuXG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRFbGVtZW50cyA9IFtcbiAgICAgIC4uLnRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvciksXG4gICAgXTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcblxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldnQpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0O1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsImV4cG9ydCBjb25zdCBpbWFnZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1pbWFnZVwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5leHBvcnQgY29uc3QgbW9kYWxJbWFnZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2UtdGl0bGVcIik7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJSb21lXCIsXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MTI3NDA1MDMwMi01ODExNDlkM2I0YzU/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI0ODcmcT04MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmFsaVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTk2MjgyMzMtZWIxYjFhNDU1NjRiP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04NzAmcT04MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ3JvYXRpYVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NTQ0NTIxNzY2NzgtYzA0Mzc0MzJiYmE2P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNDcwJnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNhbWJvZGlhXCIsXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwOTk0OTE2NTM4Mi0yZTQ0Mjc4M2M4ZDU/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NSZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPYXhhY2FcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDY1MjU2NDEwNzYwLTEwNjQwMzM5YzcyYz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQ3MCZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHcmVlY2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMzMTA1MDc5NzgwLTkyYjliZTQ4MjA3Nz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9fY2FyZHNcIik7XG5leHBvcnQgY29uc3QgY2FyZENvbnRhaW5lclNlbGVjdG9yID0gXCIuZ2FsbGVyeV9fY2FyZHNcIjtcblxuZXhwb3J0IGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbl90eXBlX2VkaXRcIik7XG5leHBvcnQgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19idXR0b25fdHlwZV9hZGRcIik7XG5leHBvcnQgY29uc3QgYWRkU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfc3VibWl0LWJ1dHRvblwiKTtcblxuZXhwb3J0IGNvbnN0IG1vZGFsRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtZWRpdFwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtYWRkXCIpO1xuXG5leHBvcnQgY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fY2xvc2VcIik7XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgZm9ybUFkZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lci1hZGRcIik7XG5leHBvcnQgY29uc3QgZm9ybUFkZFNlbGVjdG9yID0gXCIjbW9kYWwtYWRkXCI7XG5leHBvcnQgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9IFwiI21vZGFsLWVkaXRcIjtcbmV4cG9ydCBjb25zdCBmb3JtRWRpdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lci1lZGl0XCIpO1xuXG5leHBvcnQgY29uc3QgbmFtZUlucHV0ID0gcHJvZmlsZUZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19pbnB1dF90eXBlX25hbWVcIlxuKTtcbmV4cG9ydCBjb25zdCBqb2JJbnB1dCA9IHByb2ZpbGVGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5tb2RhbF9faW5wdXRfdHlwZV9qb2JcIlxuKTtcblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2pvYi10aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZVNlbGVjdG9yID0gXCIucHJvZmlsZV9fbmFtZVwiO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVKb2JTZWxlY3RvciA9IFwiLnByb2ZpbGVfX2pvYi10aXRsZVwiO1xuXG5leHBvcnQgY29uc3QgY2FyZFNlbGVjdG9yID0gXCIjY2FyZC10ZW1wbGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgcHJldmlld0ltYWdlUG9wdXAgPSBcIiNtb2RhbC1pbWFnZVwiO1xuIiwiaW1wb3J0IHsgY2xvc2VCdXR0b25zIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuXCIpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZSA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBfaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5cIikpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgX2hhbmRsZUNsb3NlQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVDbGlja091dHNpZGUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbG9zZUJ1dHRvbnMpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVDbGlja091dHNpZGUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2xvc2VCdXR0b25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY29udGFpbmVyXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0RmllbGRzID0gdGhpcy5fcG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2lucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0RGF0YSA9IHt9O1xuICAgIGlucHV0RmllbGRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dERhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXREYXRhO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgLy8gdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlU3VibWl0TGlzdGVuZXIpO1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXRMaXN0ZW5lcik7XG4gICAgc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIF9oYW5kbGVTdWJtaXRMaXN0ZW5lciA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICB9O1xuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRm9ybS5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gICAgLy8gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuXG5pbXBvcnQge1xuICBpbml0aWFsQ2FyZHMsXG4gIGJ1dHRvbkVkaXQsXG4gIGJ1dHRvbkFkZCxcbiAgZm9ybUFkZEVsZW1lbnQsXG4gIGZvcm1FZGl0RWxlbWVudCxcbiAgbmFtZUlucHV0LFxuICBqb2JJbnB1dCxcbiAgY2FyZFNlbGVjdG9yLFxuICBwcmV2aWV3SW1hZ2VQb3B1cCxcbiAgY2FyZENvbnRhaW5lclNlbGVjdG9yLFxuICBmb3JtQWRkU2VsZWN0b3IsXG4gIGZvcm1FZGl0U2VsZWN0b3IsXG4gIHByb2ZpbGVOYW1lU2VsZWN0b3IsXG4gIHByb2ZpbGVKb2JTZWxlY3RvcixcbiAgYWRkU3VibWl0QnV0dG9uLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbi8vIHByb2ZpbGUgZWRpdCBhbmQgYWRkIGJ1dHRvbnNcblxuYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB1c2VySW5mbyA9IHVzZXJJbmZvcm1hdGlvbi5nZXRVc2VySW5mbygpO1xuICBuYW1lSW5wdXQudmFsdWUgPSB1c2VySW5mby51c2VyTmFtZTtcbiAgam9iSW5wdXQudmFsdWUgPSB1c2VySW5mby51c2VySm9iO1xuICBlZGl0UHJvZmlsZS5vcGVuKCk7XG59KTtcblxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gIGFkZEZvcm1WYWxpZGF0b3IuZGlzYWJsZUJ1dHRvbigpO1xuXG4gIGFkZENhcmRQb3B1cC5vcGVuKCk7XG59KTtcblxuLy8gZm9ybSB2YWxpZGF0b3JcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihvcHRpb25zLCBmb3JtRWRpdEVsZW1lbnQpO1xuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKG9wdGlvbnMsIGZvcm1BZGRFbGVtZW50KTtcblxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbi8vIFNlY3Rpb25cblxuY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xuICAgICAgcmVuZGVyQ2FyZChkYXRhKTtcbiAgICB9LFxuICB9LFxuICBjYXJkQ29udGFpbmVyU2VsZWN0b3Jcbik7XG5cbi8vIC8vcG9wdXAgd2l0aCBmb3JtIC0gYWRkIGNhcmRcblxuY29uc3QgcmVuZGVyQ2FyZCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3IENhcmQoXG4gICAge1xuICAgICAgZGF0YSxcbiAgICAgIGhhbmRsZUltYWdlUHJldmlldzogKGltYWdlRGF0YSkgPT4ge1xuICAgICAgICBwcmV2aWV3SW1hZ2Uub3BlbihpbWFnZURhdGEpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNhcmRTZWxlY3RvclxuICApO1xuICBjYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbGVtZW50LmdldFZpZXcoKSk7XG59O1xuXG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShmb3JtQWRkU2VsZWN0b3IsIChkYXRhKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZGF0YS50aXRsZTtcbiAgY29uc3QgbGluayA9IGRhdGEubGluaztcbiAgY29uc3QgY2FyZERhdGEgPSB7XG4gICAgdGl0bGUsXG4gICAgbGluayxcbiAgfTtcblxuICByZW5kZXJDYXJkKGNhcmREYXRhKTtcblxuICBhZGRDYXJkUG9wdXAuY2xvc2UoKTtcbn0pO1xuXG4vLyAvLyBwb3B1cCB3aXRoIGZvcm0gLSBlZGl0IHByb2ZpbGVcblxuY29uc3QgZWRpdFByb2ZpbGUgPSBuZXcgUG9wdXBXaXRoRm9ybShmb3JtRWRpdFNlbGVjdG9yLCAoZGF0YSkgPT4ge1xuICBjb25zdCBuYW1lID0gZGF0YS5uYW1lO1xuICBjb25zdCBqb2IgPSBkYXRhLmpvYjtcbiAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJJbmZvKHtcbiAgICBuYW1lSW5wdXQ6IG5hbWUsXG4gICAgam9iSW5wdXQ6IGpvYixcbiAgfSk7XG5cbiAgZWRpdFByb2ZpbGUuY2xvc2UoKTtcbn0pO1xuXG4vLyB1c2VySW5mb1xuXG5jb25zdCB1c2VySW5mb3JtYXRpb24gPSBuZXcgVXNlckluZm8oe1xuICBuYW1lU2VsZWN0b3I6IHByb2ZpbGVOYW1lU2VsZWN0b3IsXG4gIGpvYlRpdGxlU2VsZWN0b3I6IHByb2ZpbGVKb2JTZWxlY3Rvcixcbn0pO1xuXG4vLyAvLyBwb3B1cCB3aXRoIGltYWdlIC0gcHJldmlld1xuXG5jb25zdCBwcmV2aWV3SW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UocHJldmlld0ltYWdlUG9wdXApO1xuXG4vLyAvL2luaXRpYXRlIGNsYXNzZXNcblxuY2FyZFNlY3Rpb24ucmVuZGVyZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVyZXJJdGVtcyhpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIGpvYlRpdGxlU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fam9iVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYlRpdGxlU2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgdXNlckluZm8gPSB7XG4gICAgICB1c2VyTmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHVzZXJKb2I6IHRoaXMuX2pvYlRpdGxlLnRleHRDb250ZW50LFxuICAgIH07XG4gICAgcmV0dXJuIHVzZXJJbmZvO1xuICB9XG5cbiAgc2V0VXNlckluZm8oeyBuYW1lSW5wdXQsIGpvYklucHV0IH0pIHtcbiAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gbmFtZUlucHV0O1xuICAgIHRoaXMuX2pvYlRpdGxlLnRleHRDb250ZW50ID0gam9iSW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xuICAgIHRoaXMuX2ltYWdlVGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2UtdGl0bGVcIik7XG4gIH1cblxuICBvcGVuKHsgbmFtZSwgbGluayB9KSB7XG4gICAgdGhpcy5faW1hZ2VUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLl9pbWFnZS5hbHQgPSBuYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsIl9yZWYiLCJjYXJkU2VsZWN0b3IiLCJkYXRhIiwiaGFuZGxlSW1hZ2VQcmV2aWV3IiwidGhpcyIsIl9uYW1lIiwidGl0bGUiLCJfbGluayIsImxpbmsiLCJfaGFuZGxlSW1hZ2VQcmV2aWV3IiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVMaWtlQnV0dG9uIiwiX2VsZW1lbnRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2hhbmRsZURlbGV0ZUJ1dHRvbiIsIl9lbGVtZW50IiwicmVtb3ZlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2VsZW1lbnREZWxldGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2VsZW1lbnRJbWFnZSIsIm5hbWUiLCJnZXRWaWV3IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50VGl0bGUiLCJ0ZXh0Q29udGVudCIsInNyYyIsImFsdCIsIm9wdGlvbnMiLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJfaW5wdXRFcnJvckNsYXNzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9lbmFibGVCdXR0b24iLCJfYnV0dG9uRWxlbWVudCIsImRpc2FibGVkIiwiZGlzYWJsZUJ1dHRvbiIsIl90b2dnbGVCdXR0b24iLCJpbnZhbGlkSW5wdXQiLCJfaW5wdXRFbGVtZW50cyIsImZvckVhY2giLCJyZXNldFZhbGlkYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZ0IiwiZW5hYmxlVmFsaWRhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uRWRpdCIsImJ1dHRvbkFkZCIsImNsb3NlQnV0dG9ucyIsInByb2ZpbGVGb3JtRWxlbWVudCIsImZvcm1BZGRFbGVtZW50IiwiZm9ybUVkaXRFbGVtZW50IiwibmFtZUlucHV0Iiwiam9iSW5wdXQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50Iiwib3BlbiIsInNldEV2ZW50TGlzdGVuZXJzIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIl9oYW5kbGVFc2NDbG9zZSIsImtleSIsIl9oYW5kbGVDbGlja091dHNpZGUiLCJ0YXJnZXQiLCJjb250YWlucyIsIl9oYW5kbGVDbG9zZUJ1dHRvbnMiLCJidXR0b24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9wb3B1cEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0RmllbGRzIiwiaW5wdXREYXRhIiwiaW5wdXQiLCJ2YWx1ZSIsIl9oYW5kbGVTdWJtaXRMaXN0ZW5lciIsInJlc2V0IiwidXNlckluZm8iLCJ1c2VySW5mb3JtYXRpb24iLCJnZXRVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckpvYiIsImVkaXRQcm9maWxlIiwiYWRkRm9ybVZhbGlkYXRvciIsImFkZENhcmRQb3B1cCIsImlucHV0RXJyb3JDbGFzcyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsImNhcmRTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJyZW5kZXJlckl0ZW1zIiwiaXRlbXMiLCJpdGVtIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwicmVuZGVyQ2FyZCIsImNhcmRFbGVtZW50IiwiaW1hZ2VEYXRhIiwicHJldmlld0ltYWdlIiwiam9iIiwic2V0VXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJqb2JUaXRsZVNlbGVjdG9yIiwiX2pvYlRpdGxlIiwiX3JlZjIiLCJfaW1hZ2UiLCJfaW1hZ2VUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=