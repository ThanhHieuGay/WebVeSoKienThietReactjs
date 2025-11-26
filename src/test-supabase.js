import { supabase, getAllProvinces, getLatestResults } from './lib/supabaseClient';

async function testConnection() {
  console.log('🔗 Testing Supabase connection...');
  
  // Test 1: Lấy danh sách tỉnh
  const provinces = await getAllProvinces();
  console.log('✅ Provinces:', provinces.length, 'tỉnh');
  
  // Test 2: Lấy kết quả mới nhất
  const results = await getLatestResults(5);
  console.log('✅ Latest results:', results.length, 'kết quả');
  
  // Test 3: Check raw connection
  const { data, error } = await supabase.from('users').select('count');
  if (error) {
    console.error('❌ Error:', error);
  } else {
    console.log('✅ Connected to Supabase successfully!');
  }
}

testConnection();