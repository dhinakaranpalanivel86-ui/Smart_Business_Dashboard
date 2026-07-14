/**
 * Smart Business Dashboard Visual Analytics Engine Configuration Platform
 * Chart.js Integration Infrastructure Execution
 */

document.addEventListener("DOMContentLoaded", () => {
    initDashboardVisualAnalyticsCharts();
});

function initDashboardVisualAnalyticsCharts() {
    const trendCtx = document.getElementById("revenueTrendChart");
    const barCtx = document.getElementById("monthlySalesChart");
    const pieCtx = document.getElementById("salesCategoryChart");

    if (!trendCtx || !barCtx || !pieCtx) return;

    // Read computed styling variables configurations dynamically from structural root variables tokens
    const styleTokens = getComputedStyle(document.documentElement);
    const colorPrimary = styleTokens.getPropertyValue('--primary').trim() || '#4f46e5';
    const colorSecondary = styleTokens.getPropertyValue('--secondary').trim() || '#6366f1';
    const colorSuccess = styleTokens.getPropertyValue('--success').trim() || '#10b981';
    const colorWarning = styleTokens.getPropertyValue('--warning').trim() || '#f59e0b';
    const colorDanger = styleTokens.getPropertyValue('--danger').trim() || '#ef4444';
    const colorInfo = styleTokens.getPropertyValue('--info').trim() || '#06b6d4';
    const textMainColor = styleTokens.getPropertyValue('--text-main').trim() || '#1e293b';
    const borderGridColor = styleTokens.getPropertyValue('--border-color').trim() || '#e2e8f0';

    // Global Defaults Overrides Config for Charts
    Chart.defaults.color = textMainColor;
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.plugins.legend.labels.boxWidth = 12;
    Chart.defaults.plugins.legend.labels.padding = 16;

    /**
     * A. Revenue Trend Analysis Visual Component (Line Structure Model Diagram)
     */
    new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Gross Consolidated Billings ($)',
                data: [48000, 52000, 61000, 58000, 73000, 82000, 79000, 91000, 98000, 105000, 118000, 128450],
                borderColor: colorPrimary,
                backgroundColor: 'rgba(79, 70, 229, 0.06)',
                fill: true,
                tension: 0.38,
                borderWidth: 3,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: colorPrimary
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: borderGridColor },
                    ticks: { callback: value => '$' + (value / 1000) + 'k' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    /**
     * B. Monthly Distribution Performance (Bar Structure Analytics Representation View)
     */
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Q1-Alpha', 'Q2-Beta', 'Q3-Gamma', 'Q4-Delta'],
            datasets: [
                {
                    label: 'Enterprise Core Platforms',
                    data: [1200, 1450, 1100, 1900],
                    backgroundColor: colorPrimary,
                    borderRadius: 6
                },
                {
                    label: 'SaaS Token Subscriptions',
                    data: [900, 1100, 1300, 1650],
                    backgroundColor: colorSecondary,
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', align: 'end' }
            },
            scales: {
                y: { grid: { color: borderGridColor } },
                x: { grid: { display: false } }
            }
        }
    });

    /**
     * C. Category Distribution Split Framework Vector (Pie Visualization Layout Element Matrix)
     */
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Cloud Infrastructure', 'Identity Security Systems', 'Data Warehousing Pipeline Solutions', 'Consulting Advisory Blocks'],
            datasets: [{
                data: [45, 25, 18, 12],
                backgroundColor: [colorPrimary, colorSuccess, colorWarning, colorDanger],
                borderWidth: 2,
                borderColor: styleTokens.getPropertyValue('--bg-card').trim() || '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { boxWidth: 12, padding: 12 }
                }
            }
        }
    });
}