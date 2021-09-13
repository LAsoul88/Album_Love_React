$editModal = $('.edit-modal');
$edit = $('.edit');
$editClose = $('.edit-close');


$delete = $('.delete');


$edit.on('click', (e) => {
  console.log(e.target.dataset);

  $(`#${e.target.dataset.commentId}`).css('display', 'block');
});

$editClose.on('click', () => {
  $editModal.css('display', 'none');
});

// window.onclick = (e) => {
//   if (e.target == $editModal) {
//     $editModal.css('display', 'none');
//   }
// };