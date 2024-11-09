module.exports = {
  'id-class-ignore-regex': false,
  'line-max-len-ignore-regex': false,
  'spec-char-escape': false,
  'plugins': ['linthtml-rules-expa'],
  'attr-name-ignore-regex': 'viewBox|preserveAspectRatio',
  'rules': {
    'expa/space-between-comments': [true, 'space'],
    'expa/a-target-rel': true,
    'expa/aria-label-misuse': true,
    'expa/attr-delimiter': true,
    'expa/attr-req-value': [true, { ignore: ['alt'] }],
    'expa/attribute-allowed-values': [
      true, {
        'input': {
          attributes: {
            'type': {
              enum: [
                'text', 'email', 'password', 'radio', 'checkbox', 'file', 'number', 'color',
                'date', 'range', 'hidden'
              ],
            },
          },
        },
      },
    ],
    'expa/ban-url-spaces': true,
    'expa/charset-position': true,
    'expa/class-first': true,
    'expa/form-action-attribute': true,
    'expa/head-meta-charset': true,
    'expa/id-no-dup': true,
    'expa/img-svg-req-dimensions': true,
    'expa/input-req-label': true,
    'expa/link-req-content': true,
    'expa/no-blocking-script': true,
    'expa/no-double-br': true,
    'expa/no-px-size': true,
    'expa/req-charset-utf': true,
    'expa/req-head-styles': true,
    'expa/req-mailto': true,
    'expa/req-meta-viewport': true,
    'expa/req-single-styles': true,
    'expa/req-stylesheet-link': true,
    'expa/section-has-heading': true,
    'expa/tag-name-lowercase': [true, {
      ignore: ['clipPath', 'textPath', 'linearGradient', 'radialGradient']
    }],
    'expa/tag-req-attr': [
      true, {
        'input': [
          {
            name: 'name',
            ignore: {
              type: 'submit'
            }
          },
        ],
        'select': [
          {
            name: 'name',
          },
        ],
        'textarea': [
          {
            name: 'name',
          },
        ],
        'time': [
          {
            name: 'datetime',
          },
        ],
        'source': [
          {
            name: 'type',
          },
        ],
        'button': [
          {
            name: 'type',
          },
        ],
        'a': [
          {
            name: 'href',
          },
        ],
      },
    ],
    'expa/tag-self-close': true,
    'expa/req-source-width-height': true,
    'expa/tag-forbid-attr': false,
    'expa/req-tags-presence': [true, ['h1', 'main']],
    'expa/req-preload-font': true,
    'expa/req-webp-in-picture': true,
    'expa/no-class-in-container': false,

    'attr-bans': false,
    'attr-name-style': [true, 'dash'],
    'attr-new-line': false,
    'attr-no-dup': true,
    'attr-no-unsafe-char': true,
    'attr-order': false,
    'attr-quote-style': [true, 'double'],
    'attr-req-value': false,
    'attr-validate': true,
    'button-req-content': true,
    'class-no-dup': true,
    'class-style': false,
    'doctype-first': true,
    'doctype-html5': true,
    'fieldset-contains-legend': true,
    'fig-req-figcaption': true,
    'focusable-tabindex-style': true,
    'head-req-title': true,
    'head-valid-content-model': true,
    'href-style': false,
    'html-req-lang': true,
    'html-valid-content-model': true,
    'id-class-no-ad': false,
    'id-class-style': false,
    'id-no-dup': false, // fixme rule broken in latest linter version waiting https://github.com/linthtml/linthtml/issues/469
    'id-style': [true, 'dash'],
    'img-req-alt': [true, 'allownull'],
    'img-req-src': true,
    'indent-style': false,
    'indent-width': false,
    'input-btn-req-value-or-title': true,
    'input-radio-req-name': true,
    'input-req-label': false,
    'label-no-enc-textarea-or-select': true,
    'label-req-for': false,
    'lang-style': [true, 'case'],
    'line-end-style': false,
    'line-max-len': false,
    'line-no-trailing-whitespace': false,
    'no-surrounding-whitespace': true,
    'link-min-length-4': false,
    'spec-char-escape': false,
    'link-req-noopener': false,
    'table-req-caption': false,
    'table-req-header': false,
    'tag-bans': [true, 'style'],
    'tag-close': true,
    'tag-name-lowercase': false,
    'tag-name-match': true,
    'tag-self-close': false,
    'title-max-len': false,
    'title-no-dup': true,
  },
};
