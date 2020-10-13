export interface ModalData {
  id: string,
  title: string,
  text: string
}

export interface ModalModel {
  modalData: ModalData,
  modalOpen: boolean,
}
