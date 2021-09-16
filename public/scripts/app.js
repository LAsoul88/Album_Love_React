$editModal = $('.edit-modal');
$edit = $('.edit');
$editClose = $('.edit-close');

$deleteModal = $('.delete-modal');
$delete = $('.delete');
$deleteClose = $('.delete-close');

$avatarModal = $('.avatar-modal');
$avatar = $('.avatar');
$avatarClose = $('.avatar-close');

$edit.on('click', (e) => {
  $(`#e${e.target.dataset.updateId}`).css('display', 'block');
});

$editClose.on('click', () => {
  $editModal.css('display', 'none');
});

$delete.on('click', (e) => {
  $(`#d${e.target.dataset.deleteId}`).css('display', 'block');
});

$deleteClose.on('click', () => {
  $deleteModal.css('display', 'none');
});

$avatar.on('click', (e) => {
  $(`#${e.target.dataset.avatarId}`).css('display', 'block');
});

$avatarClose.on('click', () => {
  $avatarModal.css('display', 'none');
});

// window.onclick = (e) => {
//   if (e.target == $editModal) {
//     $editModal.css('display', 'none');
//   }
// };