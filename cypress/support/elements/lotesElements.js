class lotesElements {

btn_next_events() {
    return '[data-testid="button-testid"]';
  }

btn_batch() {
    return ':nth-child(1) > ._LiveCardContainer_xok05_101'
}

btn_card_bid() {
    return '#product-container > :nth-child(1)'
}

text_description_card() {
    return ':nth-child(1) > ._description_d4t8o_243'
}

text_values_card() {
    return ':nth-child(2) > ._value-section_d4t8o_288'
}

btn_favorite_card() {
    return ':nth-child(2) > ._info-section_d4t8o_232 > #composition-button > ._off_2zkt7_1'
}

btn_bid_batch_card() {
    return ':nth-child(1) > ._interaction-section_d4t8o_254 > ._bid-status_d4t8o_264'
}

btn_exit_bid_batch_card() {
    return 'button.modal-module_button__jzlGv'
}

btn_info_batch_card() {
    return 'div._icons_d4t8o_275 > svg'
}

btn_photo_batch_card() {
    return 'button.modal-module_button__jzlGv'
}

btn_card_lote() {
    return ':nth-child(1) > ._interaction-section_d4t8o_254 > ._bid-status_d4t8o_264'
}

btn_photo_bid() {
    return '._imageFullscreen__button-open_1h8dh_68'
}

btn_change_photo_bid() {
    return '._next_zyf19_25'
}

btn_favorite_bid() {
    return '._BidPanelContainer__content__body__fav_145y2_180 > :nth-child(2) > [aria-haspopup="false"]'
}

btn_share_bid() {
    return '._BidPanelContainer__content__body__fav_145y2_180 > :nth-child(2) > div._shareOptions_1mhq5_1 > #composition-button'
}

text_info_bid() {
    return '._box_1bk0l_80'
}

text_description_card_bid() {
    return '._BidPanelContainer__content__body__heading_145y2_153'
}

text_location_card_bid() {
    return '._BidPanelContainer__content__body__location_145y2_172'
}

text_next_bid_card() {
    return '._BidPanelContainer__content__body__nextBid_145y2_235 > h3'
}

btn_bid_options_card() {
    return '[data-testid="BidOptions"]'
}

btn_more_information_card_bid() {
    return '[data-testid="Accordion"]'
}

text_more_information_card_bid() {
    return '.accordion-module_accordion__content__Usx-Z > p'
}

text_history_card_bid() {
    return '._accordionBody_145y2_294'
}
}



export default lotesElements