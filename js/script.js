/**
 * Master Smart Business Dashboard Operations Engine Framework
 * Vanilla Javascript Core Script Infrastructure Control File
 */

// Global Structural Initialized Dummy System Ledger Arrays Lists Records
const SYSTEM_MOCK_ORDERS_ARRAY = [
    { id: "TRX-98210", customer: "Marcus Vance", product: "Cloud Compute Node Enterprise", amount: "$1,240.00", status: "Completed", date: "2026-07-11 09:34" },
    { id: "TRX-98211", customer: "Helena Rostova", product: "AI Pattern Analytics Token Suite", amount: "$850.00", status: "Pending", date: "2026-07-11 10:12" },
    { id: "TRX-98212", customer: "Douglas Finch", product: "Unified Endpoint Security License", amount: "$2,100.00", status: "Completed", date: "2026-07-10 14:45" },
    { id: "TRX-98213", customer: "Aiko Tanaka", product: "Kubernetes Storage Pool Expansion", amount: "$430.00", status: "Failed", date: "2026-07-10 16:22" },
    { id: "TRX-98214", customer: "Brian O'Conner", product: "Data Pipeline Orchestrator Core", amount: "$3,400.00", status: "Completed", date: "2026-07-09 11:05" },
    { id: "TRX-98215", customer: "Clara Oswald", product: "Edge CDN Node Deployment Package", amount: "$150.00", status: "Completed", date: "2026-07-09 13:50" },
    { id: "TRX-98216", customer: "David Miller", product: "Enterprise Threat Detection Sensor", amount: "$980.00", status: "Pending", date: "2026-07-08 08:15" },
    { id: "TRX-98217", customer: "Emma Watson", product: "Biometric IAM Security Gateway Module", amount: "$1,870.00", status: "Completed", date: "2026-07-08 17:30" },
    { id: "TRX-98218", customer: "Frank Castle", product: "High-Throughput Kafka Broker Cluster", amount: "$5,600.00", status: "Failed", date: "2026-07-07 12:00" },
    { id: "TRX-98219", customer: "Grace Hopper", product: "Serverless Compute Engine Token Pack", amount: "$290.00", status: "Completed", date: "2026-07-07 15:10" }
];

let SYSTEM_DIRECTORY_USERS_ARRAY = [
    { id: "1", name: "Sarah Jenkins", email: "s.jenkins@nexusanalytics.io", role: "System Administrator", status: "Active" },
    { id: "2", name: "Alex Mercer", email: "a.mercer@nexusanalytics.io", role: "Data Operations Analyst", status: "Active" },
    { id: "3", name: "Elena Petrova", email: "e.petrova@nexusanalytics.io", role: "Support Engineer", status: "Suspended" },
    { id: "4", name: "David Vance", email: "d.vance@nexusanalytics.io", role: "Finance Auditor", status: "Active" }
];

document.addEventListener("DOMContentLoaded", () => {
    initGlobalWorkspaceComponents();
    initThemeStateEngine();
    initDynamicCounters();
    renderOrdersLedgerTables();
    renderIdentityUserDirectory();
});

/**
 * 1. Global Shell Framework Component Interactions Initialization
 */
function initGlobalWorkspaceComponents() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menuToggleBtn");
    const sidebarClose = document.getElementById("sidebarCloseBtn");
    const profileTrigger = document.getElementById("profileTrigger");
    const profileDropdown = document.getElementById("profileDropdown");
    const liveClockEl = document.getElementById("liveClock");

    // Sidebar Toggling Control Mechanics
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => sidebar.classList.add("open"));
    }
    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener("click", () => sidebar.classList.remove("open"));
    }

    // Top Right Contextual User Menu Dropdown Handler Controls
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle("show");
            profileTrigger.querySelector("i").style.transform = profileDropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
        });
        document.addEventListener("click", () => {
            profileDropdown.classList.remove("show");
            profileTrigger.querySelector("i").style.transform = "rotate(0deg)";
        });
    }

    // Realtime Precision System Running Clock Operations Matrix
    if (liveClockEl) {
        setInterval(() => {
            const timeObj = new Date();
            liveClockEl.textContent = timeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }, 1000);
    }

    // Setup Notification Banner Dummy Triggers
    const bellBtn = document.getElementById("notiBell");
    if (bellBtn) {
        bellBtn.addEventListener("click", () => {
            alert("System Event Notifications:\n1. Server Instance node-4 capacity near 88%.\n2. Security patch vector standard deployed.\n3. Dynamic billing cycle pipeline execution success.");
            const badge = document.getElementById("notiBadge");
            if (badge) badge.style.display = "none";
        });
    }
}

/**
 * 2. Theme State Transition Configuration Engine
 */
function initThemeStateEngine() {
    const toggleButton = document.getElementById("themeToggle");
    if (!toggleButton) return;

    const savedTheme = localStorage.getItem("workspace-theme-state") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcon(toggleButton, savedTheme);

    toggleButton.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const targetedTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", targetedTheme);
        localStorage.setItem("workspace-theme-state", targetedTheme);
        updateThemeToggleIcon(toggleButton, targetedTheme);
    });
}

function updateThemeToggleIcon(btn, theme) {
    const icon = btn.querySelector("i");
    if (theme === "dark") {
        icon.className = "fas fa-sun";
        icon.style.color = "#f59e0b";
    } else {
        icon.className = "fas fa-moon";
        icon.style.color = "";
    }
}

/**
 * 3. Dynamic Numerical Counters Component Implementation Algorithm
 */
function initDynamicCounters() {
    const counterElements = document.querySelectorAll(".counter");
    if (counterElements.length === 0) return;

    counterElements.forEach(counter => {
        const targetValue = parseFloat(counter.getAttribute("data-target"));
        const containsDollar = counter.textContent.includes("$") || counter.getAttribute("data-target") > 1000; 
        const isPercent = targetValue < 100 && targetValue.toString().includes(".");

        let startValue = 0;
        const calculationDuration = 1200; // Milliseconds duration metrics execution
        const iterationStepTime = 20;
        const totalSteps = calculationDuration / iterationStepTime;
        const incrementalStepValue = targetValue / totalSteps;

        const countingTimer = setInterval(() => {
            startValue += incrementalStepValue;
            if (startValue >= targetValue) {
                clearInterval(countingTimer);
                formatCounterOutput(counter, targetValue, containsDollar, isPercent);
            } else {
                formatCounterOutput(counter, startValue, containsDollar, isPercent);
            }
        }, iterationStepTime);
    });
}

function formatCounterOutput(element, value, isCurrency, isPercentage) {
    if (isPercentage) {
        element.textContent = `${value.toFixed(1)}%`;
    } else if (isCurrency || value > 1000) {
        element.textContent = `$${Math.floor(value).toLocaleString()}`;
    } else {
        element.textContent = Math.floor(value).toLocaleString();
    }
}

/**
 * 4. Trans Ledger Data Rendering Framework & Live Query Filtering Pipelines
 */
function renderOrdersLedgerTables() {
    const summaryTarget = document.getElementById("dashboardOrdersSummaryTable");
    const masterLedgerTarget = document.getElementById("masterOrdersLedgerSystemTableBody");
    const searchFilterInput = document.getElementById("ledgerGlobalSearchBoxFilter");
    const globalOverviewSearch = document.getElementById("globalSearch");

    // Handler execution injection logic route for index dashboard portal overview snippet
    if (summaryTarget) {
        summaryTarget.innerHTML = SYSTEM_MOCK_ORDERS_ARRAY.slice(0, 5).map(order => `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${order.customer}</td>
                <td>${order.product}</td>
                <td><strong>${order.amount}</strong></td>
                <td><span class="status-badge badge-${order.status.toLowerCase()}">${order.status}</span></td>
            </tr>
        `).join("");
    }

    // Configuration array builder for dedicated separate tracking layout matrix ledger page
    if (masterLedgerTarget) {
        const structuralRenderDelegate = (dataArray) => {
            if (dataArray.length === 0) {
                masterLedgerTarget.innerHTML = `<tr><td colspan="6" class="text-muted" style="text-align: center; padding: 3rem;">No matching transactional logging packets found inside this matrix sector.</td></tr>`;
                return;
            }
            masterLedgerTarget.innerHTML = dataArray.map(order => `
                <tr>
                    <td><strong>${order.id}</strong></td>
                    <td>${order.customer}</td>
                    <td>${order.product}</td>
                    <td><strong>${order.amount}</strong></td>
                    <td><small>${order.date}</small></td>
                    <td><span class="status-badge badge-${order.status.toLowerCase()}">${order.status}</span></td>
                </tr>
            `).join("");
        };

        structuralRenderDelegate(SYSTEM_MOCK_ORDERS_ARRAY);

        if (searchFilterInput) {
            searchFilterInput.addEventListener("input", (e) => {
                const searchCriteriaTerm = e.target.value.toLowerCase().trim();
                const filteredResults = SYSTEM_MOCK_ORDERS_ARRAY.filter(item => 
                    item.customer.toLowerCase().includes(searchCriteriaTerm) || 
                    item.product.toLowerCase().includes(searchCriteriaTerm) ||
                    item.id.toLowerCase().includes(searchCriteriaTerm)
                );
                structuralRenderDelegate(filteredResults);
            });
        }
    }

    // Standard minimal link interface logic connectivity mapping for dashboard top bar filter box
    if (globalOverviewSearch && summaryTarget) {
        globalOverviewSearch.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const subset = SYSTEM_MOCK_ORDERS_ARRAY.slice(0, 5).filter(o => o.customer.toLowerCase().includes(query) || o.product.toLowerCase().includes(query));
            summaryTarget.innerHTML = subset.map(order => `
                <tr>
                    <td><strong>${order.id}</strong></td><td>${order.customer}</td><td>${order.product}</td><td><strong>${order.amount}</strong></td>
                    <td><span class="status-badge badge-${order.status.toLowerCase()}">${order.status}</span></td>
                </tr>
            `).join("");
        });
    }
}

/**
 * 5. Identity Context Management Framework Engine (CRUD Logic System Controls)
 */
function renderIdentityUserDirectory() {
    const tableContainerElement = document.getElementById("usersDirectoryDynamicTable");
    if (!tableContainerElement) return;

    const modalOverlay = document.getElementById("userFormModalContextOverlay");
    const modalForm = document.getElementById("userSystemDirectoryInteractiveForm");
    const openModalBtn = document.getElementById("openCreateUserModalBtn");
    const closeModalBtn = document.getElementById("modalCloseActionTriggerBtn");
    const cancelModalBtn = document.getElementById("modalCancelActionTriggerBtn");
    const tableSearchInput = document.getElementById("userTableSearchInput");

    const directoryUIRenderEngine = (dataset) => {
        if (dataset.length === 0) {
            tableContainerElement.innerHTML = `<tr><td colspan="5" class="text-muted" style="text-align:center; padding:2.5rem;">No registered identity asset components matched search criteria parameters.</td></tr>`;
            return;
        }
        tableContainerElement.innerHTML = dataset.map(user => `
            <tr data-id="${user.id}">
                <td>
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <div class="kpi-icon bg-primary-light text-primary" style="width:32px; height:32px; font-size:0.85rem; border-radius:50%; flex-shrink:0;">
                            ${user.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <strong>${user.name}</strong>
                    </div>
                </td>
                <td>${user.email}</td>
                <td><span class="text-muted"><i class="fas fa-user-tag" style="font-size:0.75rem; margin-right:4px;"></i>${user.role}</span></td>
                <td><span class="status-badge badge-${user.status.toLowerCase()}">${user.status}</span></td>
                <td>
                    <div class="actions-cell-wrapper">
                        <button class="btn-action-circle edit-trigger-action" title="Modify Context Metadata"><i class="fas fa-pen"></i></button>
                        <button class="btn-action-circle delete-trigger delete-trigger-action" title="Purge Identity Profile"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
        `).join("");
        attachRowActionControlEventListeners();
    };

    directoryUIRenderEngine(SYSTEM_DIRECTORY_USERS_ARRAY);

    // Filter pipeline logic integration engine for Identity directory layout
    if (tableSearchInput) {
        tableSearchInput.addEventListener("input", (e) => {
            const queryValue = e.target.value.toLowerCase().trim();
            const dynamicMatches = SYSTEM_DIRECTORY_USERS_ARRAY.filter(u => u.name.toLowerCase().includes(queryValue) || u.email.toLowerCase().includes(queryValue) || u.role.toLowerCase().includes(queryValue));
            directoryUIRenderEngine(dynamicMatches);
        });
    }

    // Modal Display Trigger Wiring Mechanics Config
    const openModalClosureConfig = (mode = "create", userId = null) => {
        modalOverlay.classList.add("show");
        if (mode === "edit" && userId) {
            const currentObj = SYSTEM_DIRECTORY_USERS_ARRAY.find(u => u.id === userId.toString());
            if (!currentObj) return;
            document.getElementById("modalContextActionTitle").textContent = "Modify Operational Identity Asset";
            document.getElementById("formSubmissionHiddenProfileId").value = currentObj.id;
            document.getElementById("formFieldIdentityName").value = currentObj.name;
            document.getElementById("formFieldIdentityEmail").value = currentObj.email;
            document.getElementById("formFieldIdentityRole").value = currentObj.role;
            document.getElementById("formFieldIdentityStatus").value = currentObj.status;
            document.getElementById("modalFormSubmitActionButton").textContent = "Apply Variance Modifiers";
        } else {
            document.getElementById("modalContextActionTitle").textContent = "Provision New Profile Context";
            document.getElementById("formSubmissionHiddenProfileId").value = "";
            modalForm.reset();
            document.getElementById("modalFormSubmitActionButton").textContent = "Commit Profile";
        }
    };

    const closeModalClosureConfig = () => {
        modalOverlay.classList.remove("show");
        modalForm.reset();
    };

    if (openModalBtn) openModalBtn.addEventListener("click", () => openModalClosureConfig("create"));
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModalClosureConfig);
    if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModalClosureConfig);

    // Save and Edit Form Interceptor Submission Pipelines Execution Block
    modalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const hiddenId = document.getElementById("formSubmissionHiddenProfileId").value;
        const inputName = document.getElementById("formFieldIdentityName").value.trim();
        const inputEmail = document.getElementById("formFieldIdentityEmail").value.trim();
        const inputRole = document.getElementById("formFieldIdentityRole").value;
        const inputStatus = document.getElementById("formFieldIdentityStatus").value;

        if (hiddenId) {
            // Processing modification update adjustments on structured records parameters arrays matching index mappings
            const positionIdx = SYSTEM_DIRECTORY_USERS_ARRAY.findIndex(u => u.id === hiddenId);
            if (positionIdx !== -1) {
                SYSTEM_DIRECTORY_USERS_ARRAY[positionIdx] = { id: hiddenId, name: inputName, email: inputEmail, role: inputRole, status: inputStatus };
            }
        } else {
            // Append newly calculated dynamic node components data tracking signatures arrays blocks configurations
            const generatedUniqueUid = (Math.floor(Math.random() * 10000) + 5).toString();
            SYSTEM_DIRECTORY_USERS_ARRAY.push({ id: generatedUniqueUid, name: inputName, email: inputEmail, role: inputRole, status: inputStatus });
        }
        
        closeModalClosureConfig();
        directoryUIRenderEngine(SYSTEM_DIRECTORY_USERS_ARRAY);
        if (tableSearchInput) tableSearchInput.value = "";
    });

    function attachRowActionControlEventListeners() {
        // Edit Trigger Buttons Wire loops allocations configurations paths mapping
        document.querySelectorAll(".edit-trigger-action").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const targetRowId = e.target.closest("tr").getAttribute("data-id");
                openModalClosureConfig("edit", targetRowId);
            });
        });

        // Delete Processing Interceptors Arrays Action Configuration Targets
        document.querySelectorAll(".delete-trigger-action").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const rowElement = e.target.closest("tr");
                const identityId = rowElement.getAttribute("data-id");
                const identityName = rowElement.querySelector("strong").textContent;
                
                if (confirm(`CRITICAL DELETION WARNING:\nAre you absolutely sure you want to permanently purge operational access validation contexts for the identity signature [ ${identityName} ]?`)) {
                    SYSTEM_DIRECTORY_USERS_ARRAY = SYSTEM_DIRECTORY_USERS_ARRAY.filter(u => u.id !== identityId);
                    directoryUIRenderEngine(SYSTEM_DIRECTORY_USERS_ARRAY);
                    if (tableSearchInput) tableSearchInput.value = "";
                }
            });
        });
    }
}