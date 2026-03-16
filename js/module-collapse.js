document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.module-section');
    var skipKeywords = ['Resumen del Módulo', 'Nota de Derechos', 'Referencias Legales'];

    function shouldSkip(section) {
        var heading = section.querySelector('h2, h3');
        if (!heading) return true;
        var text = heading.textContent;
        for (var i = 0; i < skipKeywords.length; i++) {
            if (text.indexOf(skipKeywords[i]) !== -1) return true;
        }
        return false;
    }

    sections.forEach(function (section) {
        if (shouldSkip(section)) {
            section.classList.add('no-collapse');
            return;
        }

        var heading = section.querySelector('h2');
        if (!heading) return;

        var toggle = document.createElement('button');
        toggle.className = 'section-toggle';
        toggle.setAttribute('type', 'button');

        var chevron = document.createElement('span');
        chevron.className = 'section-chevron';
        chevron.textContent = '\u25BC';

        toggle.appendChild(heading.cloneNode(true));
        toggle.appendChild(chevron);

        var wrapper = document.createElement('div');
        wrapper.className = 'section-collapsible';

        var children = Array.prototype.slice.call(section.childNodes);
        var afterHeading = false;
        children.forEach(function (child) {
            if (child === heading) {
                afterHeading = true;
                return;
            }
            if (afterHeading) {
                wrapper.appendChild(child);
            }
        });

        heading.replaceWith(toggle);
        section.appendChild(wrapper);

        toggle.addEventListener('click', function () {
            section.classList.toggle('collapsed');
        });
    });

    var moduleContent = document.querySelector('.module-content');
    if (moduleContent && sections.length > 3) {
        var badgeRow = moduleContent.querySelector('[style*="module-badge"], [style*="flex-wrap"]');
        var insertTarget = null;
        var allDivs = moduleContent.children;
        for (var i = 0; i < allDivs.length; i++) {
            if (allDivs[i].querySelector && allDivs[i].querySelector('.module-badge')) {
                insertTarget = allDivs[i];
                break;
            }
        }

        var controls = document.createElement('div');
        controls.className = 'collapse-controls';

        var collapseBtn = document.createElement('button');
        collapseBtn.setAttribute('type', 'button');
        collapseBtn.innerHTML = '\u25B2 Colapsar todo';
        collapseBtn.addEventListener('click', function () {
            sections.forEach(function (s) {
                if (!s.classList.contains('no-collapse')) {
                    s.classList.add('collapsed');
                }
            });
        });

        var expandBtn = document.createElement('button');
        expandBtn.setAttribute('type', 'button');
        expandBtn.innerHTML = '\u25BC Expandir todo';
        expandBtn.addEventListener('click', function () {
            sections.forEach(function (s) {
                s.classList.remove('collapsed');
            });
        });

        controls.appendChild(collapseBtn);
        controls.appendChild(expandBtn);

        if (insertTarget && insertTarget.nextSibling) {
            insertTarget.parentNode.insertBefore(controls, insertTarget.nextSibling);
        } else {
            var firstSection = moduleContent.querySelector('.module-section');
            if (firstSection) {
                firstSection.parentNode.insertBefore(controls, firstSection);
            }
        }
    }
});
