import React from "react";
import { PlusCircle, CheckCircle2, Trash2, AlertCircle, Settings } from "lucide-react";

const MaintenanceDashboard = ({ tickets, newTicket, setNewTicket, addTicket, deleteTicket, toggleStatus }) => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Gestión de Mantenimiento</h2>
          <p className="text-slate-500">Control de deuda técnica y evolutivos.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm text-center">
            <p className="text-xs font-bold text-slate-400 uppercase">Total</p>
            <p className="text-xl font-bold text-slate-900">{tickets.length}</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm text-center">
            <p className="text-xs font-bold text-slate-400 uppercase">Abiertos</p>
            <p className="text-xl font-bold text-blue-600">{tickets.filter(t => t.status==='Abierto').length}</p>
          </div>
        </div>
      </div>

      {/* Nuevo Ticket */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-semibold text-slate-700">Descripción del Cambio / Error</label>
          <input
            type="text"
            placeholder="Ej: Error 404 al loguearse..."
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={newTicket.title}
            onChange={(e) => setNewTicket({...newTicket, title: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Tipo</label>
          <select
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none transition-all"
            value={newTicket.type}
            onChange={(e) => setNewTicket({...newTicket, type: e.target.value})}
          >
            <option>Correctivo</option>
            <option>Adaptativo</option>
            <option>Perfectivo</option>
            <option>Preventivo</option>
          </select>
        </div>
        <button
          onClick={addTicket}
          className="bg-blue-600 hover:bg-blue-700 text-white h-[50px] rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <PlusCircle size={20} /> Crear Ticket
        </button>
      </div>

      {/* Lista de Tickets */}
      <div className="grid grid-cols-1 gap-4">
        {tickets.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl py-20 text-center text-slate-400">
            El backlog está vacío. ¡Buen trabajo!
          </div>
        ) : (
          tickets.map(ticket => (
            <div
              key={ticket.id}
              className={`group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md ${
                ticket.status === 'Resuelto' ? 'opacity-60 grayscale' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full transition-colors ${
                  ticket.type === 'Correctivo' ? 'bg-red-50 text-red-600' :
                  ticket.type === 'Adaptativo' ? 'bg-blue-50 text-blue-600' :
                  ticket.type === 'Perfectivo' ? 'bg-purple-50 text-purple-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {ticket.type === 'Correctivo' ? <AlertCircle size={24} /> : <Settings size={24} />}
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${ticket.status === 'Resuelto' ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                    {ticket.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="font-medium">{ticket.type}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{ticket.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleStatus(ticket.id)}
                  className={`px-4 py-2 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all ${
                    ticket.status === 'Abierto'
                      ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <CheckCircle2 size={18} />
                  {ticket.status === 'Abierto' ? 'Resolver' : 'Reabrir'}
                </button>
                <button
                  onClick={() => deleteTicket(ticket.id)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MaintenanceDashboard;
