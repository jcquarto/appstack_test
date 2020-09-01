Rails.application.routes.draw do
  root to: 'pages#index'
  get 'pages/index'

  # pages section
  get 'pages/pages_profile', as: 'pages_profile'
  get 'pages/pages_settings', as: 'pages_settings'
  get 'pages/pages_clients', as: 'pages_clients'
  get 'pages/pages_projects_list', as: 'pages_projects_list'
  get 'pages/pages_projects_details', as: 'pages_projects_details'
  get 'pages/pages_invoice', as: 'pages_invoice'
  get 'pages/pages_pricing', as: 'pages_pricing'
  get 'pages/pages_tasks', as: 'pages_tasks'
  get 'pages/pages_chat', as: 'pages_chat'
  get 'pages/pages_blank', as: 'pages_blank'

  # auth section
  get 'pages/auth_signin', as: 'auth_signin'
  get 'pages/auth_signup', as: 'auth_signup'
  get 'pages/auth_reset_password', as: 'auth_reset_password'
  get 'pages/auth_404', as: 'auth_404'
  get 'pages/auth_500', as: 'auth_500'

  # ui section
  get 'pages/ui_alerts', as: 'ui_alerts'
  get 'pages/ui_buttons', as: 'ui_buttons'
  get 'pages/ui_cards', as: 'ui_cards'
  get 'pages/ui_carousel', as: 'ui_carousel'
  get 'pages/ui_embed_video', as: 'ui_embed_video'
  get 'pages/ui_general', as: 'ui_general'
  get 'pages/ui_grid', as: 'ui_grid'
  get 'pages/ui_modals', as: 'ui_modals'
  get 'pages/ui_tabs', as: 'ui_tabs'
  get 'pages/ui_typography', as: 'ui_typography'

  # icons section
  get 'pages/icons_feather', as: 'icons_feather'
  get 'pages/icons_fontawesome', as: 'icons_fontawesome'

  # forms section
  get 'pages/forms_layouts', as: 'forms_layouts'
  get 'pages/forms_basic_inputs', as: 'forms_basic_inputs'
  get 'pages/forms_input_groups', as: 'forms_input_groups'

  # tables section
  get 'pages/tables_bootstrap', as: 'tables_bootstrap'

  # form plugins section
  get 'pages/form_plugins_advanced_inputs', as: 'form_plugins_advanced_inputs'
  get 'pages/form_plugins_editors', as: 'form_plugins_editors'
  get 'pages/form_plugins_validation', as: 'form_plugins_validation'
  get 'pages/form_plugins_wizard', as: 'form_plugins_wizard'

  # datatables section

  # charts section
  get 'pages/charts_chartjs', as: 'charts_chartjs'

  # notifications section

  # maps section

  # calendar section

end
