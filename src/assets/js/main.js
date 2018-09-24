import $ from 'jquery'
import electron from 'electron'

const ipc = electron.ipcRenderer


$('#save-print-btn').click(function () {

  let initialPrice = $('#initial-price-input').val();
  $('#initial-price').text(initialPrice);

  let facilityDesc = $('#facility-description-input').val();
  $('#facility-description').text(facilityDesc);

  let ownerApproval = $('#owner-approval-input').val();
  $('#owner-approval').text(ownerApproval);

  let address = $('#address-input').val();
  $('#address').text(address);

  let arrivalDate = $('#arrival-date-input').val();
  $('#arrival-date').text(arrivalDate);

  let departureDate = $('#departure-date-input').val();
  $('#departure-date').text(departureDate);

  let reservationCode = $('#reservation-code-input').val();
  $('#reservation-code').text(reservationCode);

  let guestCount = $('#guest-count-input').val();
  $('#guest-count').text(guestCount);

  let settlementPrice = $('#settlement-price-input').val();
  $('#settlement-price').text(settlementPrice);

  let tax = $('#tax-price-input').val();
  $('#tax-price').text(tax);

  let fee = $('#fee-price-input').val();
  $('#fee-price').text(fee);

  let hostName = $('#host-name-input').val();
  $('#host-name').text(hostName);

  let telephone = $('#host-telNumber-input').val();
  $('#host-telNumber').text(telephone);

  let extraInfo = $('#extra-info-input').val();
  $('#extra-info').text(extraInfo);


  $('.reciept').addClass('show-table');
  $('.reciept-options').addClass('hide');
  ipc.send('print-to-pdf');
});
