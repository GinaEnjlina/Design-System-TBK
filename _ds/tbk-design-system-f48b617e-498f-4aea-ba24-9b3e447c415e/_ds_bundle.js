/* @ds-bundle: {"format":4,"namespace":"TBKDesignSystem_f48b61","components":[{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AlertDialog","sourcePath":"components/overlay/AlertDialog.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Sheet","sourcePath":"components/overlay/Sheet.jsx"},{"name":"EmptyState","sourcePath":"components/patterns/EmptyState.jsx"},{"name":"FilterBar","sourcePath":"components/patterns/FilterBar.jsx"},{"name":"PageHeader","sourcePath":"components/patterns/PageHeader.jsx"},{"name":"Sidebar","sourcePath":"components/patterns/Sidebar.jsx"},{"name":"Avatar","sourcePath":"components/primitives/Avatar.jsx"},{"name":"Badge","sourcePath":"components/primitives/Badge.jsx"},{"name":"Button","sourcePath":"components/primitives/Button.jsx"},{"name":"Icon","sourcePath":"components/primitives/Icon.jsx"},{"name":"Separator","sourcePath":"components/primitives/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/primitives/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/primitives/Spinner.jsx"}],"sourceHashes":{"components/data-display/Card.jsx":"dc2cc64a6892","components/data-display/Table.jsx":"e1eca2731a28","components/feedback/Alert.jsx":"4bbd1a017a76","components/feedback/Tooltip.jsx":"d654b03d5ad4","components/forms/Checkbox.jsx":"d7f0cf5c44ac","components/forms/FormField.jsx":"eac0f68e7646","components/forms/Input.jsx":"7dc49b52b8f5","components/forms/Label.jsx":"abc52a813b2e","components/forms/RadioGroup.jsx":"efd07727e989","components/forms/Select.jsx":"1728756fdf7c","components/forms/Switch.jsx":"f4dbb798ad3d","components/forms/Textarea.jsx":"a78a54622700","components/navigation/Accordion.jsx":"d8319946f2a3","components/navigation/Breadcrumb.jsx":"7ab0337fcb2c","components/navigation/Pagination.jsx":"2fd71c3a4df3","components/navigation/Tabs.jsx":"114e6243bc68","components/overlay/AlertDialog.jsx":"37085ed0da47","components/overlay/Dialog.jsx":"f69caa326983","components/overlay/Sheet.jsx":"89199cb2eb43","components/patterns/EmptyState.jsx":"7f6be270c047","components/patterns/FilterBar.jsx":"b8341d57bff0","components/patterns/PageHeader.jsx":"d33cff064f5d","components/patterns/Sidebar.jsx":"8bb4f658195b","components/primitives/Avatar.jsx":"a600cf74d1d2","components/primitives/Badge.jsx":"a695b402dcd4","components/primitives/Button.jsx":"7c74e9fd2da4","components/primitives/Icon.jsx":"143b7a525f88","components/primitives/Separator.jsx":"eefc51e6f147","components/primitives/Skeleton.jsx":"76aa65110bba","components/primitives/Spinner.jsx":"4d36a60ad755"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TBKDesignSystem_f48b61 = window.TBKDesignSystem_f48b61 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Card.jsx
try { (() => {
function Card({
  title,
  description,
  footer,
  children,
  className = ""
}) {
  return React.createElement("div", {
    className: "card " + className
  }, title || description ? React.createElement("div", {
    className: "card-header"
  }, title ? React.createElement("div", {
    className: "card-title"
  }, title) : null, description ? React.createElement("div", {
    className: "card-description"
  }, description) : null) : null, React.createElement("div", {
    className: "card-content"
  }, children), footer ? React.createElement("div", {
    className: "card-footer"
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = []
}) {
  return React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, columns.map(c => React.createElement("th", {
    key: c.key
  }, c.header)))), React.createElement("tbody", null, rows.map((r, i) => React.createElement("tr", {
    key: i
  }, columns.map(c => React.createElement("td", {
    key: c.key
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  variant = "default",
  title,
  children
}) {
  const icon = variant === "destructive" ? "circle-alert" : variant === "success" ? "circle-check" : variant === "warning" ? "triangle-alert" : "info";
  return React.createElement("div", {
    className: "alert alert-" + variant
  }, React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/" + icon + ".svg",
    width: 16,
    height: 16,
    alt: ""
  }), React.createElement("div", null, title ? React.createElement("div", {
    className: "alert-title"
  }, title) : null, React.createElement("div", null, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [open, setOpen] = React.useState(false);
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, children, open ? React.createElement("span", {
    className: "tooltip",
    style: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  className = ""
}) {
  return React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": !!checked,
    className: "checkbox " + className,
    "data-checked": checked ? "true" : "false",
    onClick: () => onChange && onChange(!checked)
  }, checked ? React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3
  }, React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function FormField({
  label,
  helper,
  error,
  required,
  children
}) {
  return React.createElement("div", null, label ? React.createElement("label", {
    className: "label"
  }, label, required ? React.createElement("span", {
    style: {
      color: "var(--destructive)"
    }
  }, " *") : null) : null, children, error ? React.createElement("p", {
    className: "error-text"
  }, React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/circle-alert.svg",
    width: 12,
    height: 12,
    alt: ""
  }), error) : helper ? React.createElement("p", {
    className: "helper-text"
  }, helper) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  error,
  className = "",
  ...props
}) {
  return React.createElement("input", {
    className: "field " + (error ? "field-error " : "") + className,
    ...props
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function Label({
  children,
  htmlFor,
  className = ""
}) {
  return React.createElement("label", {
    className: "label " + className,
    htmlFor
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  options = [],
  value,
  onChange,
  name = "radio"
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, options.map(o => React.createElement("label", {
    key: o.value,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      cursor: "pointer"
    }
  }, React.createElement("span", {
    role: "radio",
    "aria-checked": value === o.value,
    "data-checked": value === o.value ? "true" : "false",
    className: "radio",
    onClick: () => onChange && onChange(o.value)
  }), o.label)));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  value,
  placeholder = "Pilih…",
  onChange,
  className = ""
}) {
  return React.createElement("select", {
    className: "field select-trigger " + className,
    value: value || "",
    onChange: e => onChange && onChange(e.target.value)
  }, [React.createElement("option", {
    key: "_ph",
    value: "",
    disabled: true
  }, placeholder), ...options.map(o => React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))]);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  className = ""
}) {
  return React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    "data-checked": checked ? "true" : "false",
    className: "switch " + className,
    onClick: () => onChange && onChange(!checked)
  }, React.createElement("span", {
    className: "switch-thumb"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  error,
  className = "",
  ...props
}) {
  return React.createElement("textarea", {
    className: "field " + (error ? "field-error " : "") + className,
    ...props
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items = []
}) {
  const [openIdx, setOpenIdx] = React.useState(0);
  return React.createElement("div", null, items.map((it, i) => React.createElement("div", {
    key: i,
    className: "accordion-item"
  }, React.createElement("button", {
    className: "accordion-trigger",
    "data-open": openIdx === i ? "true" : "false",
    onClick: () => setOpenIdx(openIdx === i ? -1 : i)
  }, it.title, React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/chevron-down.svg",
    width: 16,
    height: 16,
    alt: ""
  })), openIdx === i ? React.createElement("div", {
    className: "accordion-content"
  }, it.content) : null)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = []
}) {
  return React.createElement("nav", {
    className: "breadcrumb"
  }, items.map((it, i) => [i > 0 ? React.createElement("span", {
    key: "sep" + i
  }, "/") : null, i === items.length - 1 ? React.createElement("span", {
    key: "c" + i,
    className: "breadcrumb-current"
  }, it.label) : React.createElement("a", {
    key: "a" + i,
    href: it.href || "#"
  }, it.label)]));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pageCount = 1,
  onChange
}) {
  const pages = Array.from({
    length: pageCount
  }, (_, i) => i + 1);
  return React.createElement("div", {
    className: "pagination"
  }, React.createElement("button", {
    className: "pagination-btn",
    disabled: page <= 1,
    onClick: () => onChange && onChange(page - 1)
  }, "‹"), pages.map(p => React.createElement("button", {
    key: p,
    className: "pagination-btn",
    "data-active": p === page ? "true" : "false",
    onClick: () => onChange && onChange(p)
  }, p)), React.createElement("button", {
    className: "pagination-btn",
    disabled: page >= pageCount,
    onClick: () => onChange && onChange(page + 1)
  }, "›"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  const active = value || tabs[0] && tabs[0].value;
  const activeTab = tabs.find(t => t.value === active);
  return React.createElement("div", null, React.createElement("div", {
    className: "tabs-list"
  }, tabs.map(t => React.createElement("button", {
    key: t.value,
    className: "tabs-trigger",
    "data-active": t.value === active ? "true" : "false",
    onClick: () => onChange && onChange(t.value)
  }, t.label))), React.createElement("div", {
    className: "tabs-content"
  }, activeTab ? activeTab.content : null));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/AlertDialog.jsx
try { (() => {
function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  confirmLabel = "Hapus",
  cancelLabel = "Batal"
}) {
  if (!open) return null;
  return React.createElement("div", {
    className: "dialog-overlay"
  }, React.createElement("div", {
    className: "dialog-content"
  }, React.createElement("div", {
    className: "dialog-header"
  }, React.createElement("div", {
    className: "dialog-title"
  }, title), React.createElement("div", {
    className: "dialog-description"
  }, description)), React.createElement("div", {
    className: "dialog-footer"
  }, React.createElement("button", {
    className: "btn btn-default btn-outline",
    onClick: () => onOpenChange(false)
  }, cancelLabel), React.createElement("button", {
    className: "btn btn-default btn-destructive",
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { AlertDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/AlertDialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer
}) {
  if (!open) return null;
  return React.createElement("div", {
    className: "dialog-overlay",
    onClick: () => onOpenChange && onOpenChange(false)
  }, React.createElement("div", {
    className: "dialog-content",
    onClick: e => e.stopPropagation()
  }, React.createElement("div", {
    className: "dialog-header"
  }, React.createElement("div", {
    className: "dialog-title"
  }, title), description ? React.createElement("div", {
    className: "dialog-description"
  }, description) : null), children, footer ? React.createElement("div", {
    className: "dialog-footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Sheet.jsx
try { (() => {
function Sheet({
  open,
  onOpenChange,
  title,
  children
}) {
  if (!open) return null;
  return React.createElement("div", {
    className: "dialog-overlay",
    style: {
      background: "rgb(15 23 42 / 0.4)"
    },
    onClick: () => onOpenChange(false)
  }, React.createElement("div", {
    className: "sheet-content",
    onClick: e => e.stopPropagation()
  }, React.createElement("div", {
    className: "dialog-title",
    style: {
      marginBottom: 16
    }
  }, title), children));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = "inbox",
  title,
  description,
  action
}) {
  return React.createElement("div", {
    className: "empty-state"
  }, React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/" + icon + ".svg",
    width: 32,
    height: 32,
    alt: ""
  }), React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--foreground)"
    }
  }, title), description ? React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)"
    }
  }, description) : null, action ? React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/patterns/FilterBar.jsx
try { (() => {
function FilterBar({
  children
}) {
  return React.createElement("div", {
    className: "filter-bar"
  }, children);
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PageHeader.jsx
try { (() => {
function PageHeader({
  title,
  subtitle,
  actions
}) {
  return React.createElement("div", {
    className: "page-header"
  }, React.createElement("div", null, React.createElement("div", {
    className: "page-title"
  }, title), subtitle ? React.createElement("div", {
    className: "page-subtitle"
  }, subtitle) : null), actions ? React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Sidebar.jsx
try { (() => {
function Sidebar({
  brand,
  sections = [],
  activeHref
}) {
  return React.createElement("div", {
    className: "sidebar"
  }, React.createElement("div", {
    className: "sidebar-brand"
  }, React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/" + "hexagon" + ".svg",
    width: 18,
    height: 18,
    className: "icon-invert",
    alt: ""
  }), brand), sections.map((sec, i) => [sec.label ? React.createElement("div", {
    key: "l" + i,
    className: "sidebar-section"
  }, sec.label) : null, ...sec.items.map(it => React.createElement("div", {
    key: it.href,
    className: "sidebar-link",
    "data-active": it.href === activeHref ? "true" : "false"
  }, React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/" + it.icon + ".svg",
    width: 16,
    height: 16,
    className: "icon-invert",
    alt: ""
  }), it.label))]));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Avatar.jsx
try { (() => {
function Avatar({
  src,
  initials,
  alt = "",
  size = 32,
  className = ""
}) {
  return React.createElement("span", {
    className: "avatar " + className,
    style: {
      width: size,
      height: size,
      fontSize: size * 0.4
    }
  }, src ? React.createElement("img", {
    src,
    alt
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Badge.jsx
try { (() => {
function Badge({
  variant = "default",
  children,
  className = ""
}) {
  return React.createElement("span", {
    className: "badge badge-" + variant + " " + className
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Badge.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "default",
  disabled,
  children,
  className = "",
  ...props
}) {
  const sizeClass = size === "default" ? "btn-default" : size === "lg" ? "btn-lg" : size === "icon" ? "btn-icon" : "";
  const classes = ["btn", sizeClass, "btn-" + variant, className].filter(Boolean).join(" ");
  return React.createElement("button", {
    className: classes,
    disabled,
    ...props
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Button.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 16,
  className = "",
  style = {}
}) {
  return React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/" + name + ".svg",
    width: size,
    height: size,
    alt: "",
    className,
    style
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Icon.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Separator.jsx
try { (() => {
function Separator({
  orientation = "horizontal",
  className = ""
}) {
  return React.createElement("div", {
    className: "separator " + (orientation === "vertical" ? "separator-v" : "separator-h") + " " + className
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Separator.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Skeleton.jsx
try { (() => {
function Skeleton({
  width = "100%",
  height = 16,
  className = ""
}) {
  return React.createElement("div", {
    className: "skeleton " + className,
    style: {
      width,
      height
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Spinner.jsx
try { (() => {
function Spinner({
  size = 16,
  className = ""
}) {
  return React.createElement("svg", {
    className: "spinner " + className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, React.createElement("path", {
    d: "M12 2 A10 10 0 0 1 22 12",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Spinner.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AlertDialog = __ds_scope.AlertDialog;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

})();
