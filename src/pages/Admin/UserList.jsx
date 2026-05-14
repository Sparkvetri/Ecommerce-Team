import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  Users, 
  Edit, 
  Trash2, 
  Shield, 
  Mail,
  User as UserIcon,
  Loader2,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const UserList = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${currentUser.token}` } };
      const { data } = await axios.get('http://localhost:5000/api/users', config);
      setUsers(data);
    } catch (error) {
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      try {
        const config = { headers: { Authorization: `Bearer ${currentUser.token}` } };
        await axios.delete(`http://localhost:5000/api/users/${id}`, config);
        toast.success('User removed');
        fetchUsers();
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  };

  const toggleAdmin = async (user) => {
    try {
      const config = { headers: { Authorization: `Bearer ${currentUser.token}` } };
      await axios.put(`http://localhost:5000/api/users/${user._id}`, { isAdmin: !user.isAdmin }, config);
      toast.success('User updated');
      fetchUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">User Management</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage user accounts, roles and permissions</p>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-red-600" size={40} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">User</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Email</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Admin Status</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                <AnimatePresence>
                  {users.map((user) => (
                    <motion.tr 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={user._id} 
                      className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${user.isAdmin ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-400'}`}>
                            <UserIcon size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">{user.name}</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID: {user._id.substring(0, 8)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Mail size={14} />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <button 
                          onClick={() => toggleAdmin(user)}
                          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${user.isAdmin ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}
                        >
                          {user.isAdmin ? (
                            <><CheckCircle2 size={12} /> Administrator</>
                          ) : (
                            <><XCircle size={12} /> Standard User</>
                          )}
                        </button>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => deleteHandler(user._id)} 
                            disabled={user.isAdmin}
                            className={`p-2 transition-colors ${user.isAdmin ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-red-600'}`}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
