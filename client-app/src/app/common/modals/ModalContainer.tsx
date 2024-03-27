import { observer } from "mobx-react-lite";
import { Modal } from "semantic-ui-react";
import { useStore } from "../../stores/store";

export const ModalContainer = observer(() => {
  const { modalStore } = useStore();

  return (
    <Modal open={modalStore.modal.open} onClose={modalStore.closeModal}>
      {modalStore.modal.body}
    </Modal>
  );
});
